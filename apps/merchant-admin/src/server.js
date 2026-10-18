import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { getDatabase, MerchantRepository, SupportTicketRepository } from '@youpi/db';
import { getAdminToken, safeEqual } from '@youpi/common';

const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** Security headers applied to every response served by the merchant admin. */
const BASE_SECURITY_HEADERS = Object.freeze({
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'SAMEORIGIN',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Content-Security-Policy': "default-src 'self'; img-src 'self' data: https:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'; frame-ancestors 'self'; base-uri 'none'; form-action 'self'; object-src 'none'"
});

/** True when the caller presented the admin bearer token in constant time. */
function hasAdminToken(req) {
  const match = /^Bearer\s+(.+)$/i.exec(req.headers?.['authorization'] || '');
  if (!match) return false;
  return safeEqual(match[1].trim(), getAdminToken());
}

// In production, reliably ensure environment variables from .env are loaded if not already provided
if (!process.env.BASE_PAYMENT_API_URL && typeof process.loadEnvFile === 'function') {
  try {
    const rootEnv = path.resolve(__dirname, '../../../.env');
    if (fs.existsSync(rootEnv)) {
      process.loadEnvFile(rootEnv);
    }
  } catch {}
}

export class AdminServer {
  /**
   * @param {{
   *   db?: import('@youpi/db').Database,
   *   apiBaseUrl?: string
   * }} options
   */
  constructor(options = {}) {
    this.db = options.db || getDatabase();
    this.apiBaseUrl = options.apiBaseUrl || process.env.BASE_PAYMENT_API_URL || 'http://localhost:6100';
    this.merchantRepo = new MerchantRepository(this.db);
    this.ticketRepo = new SupportTicketRepository(this.db);
    this.htmlTemplatePath = path.join(__dirname, 'views', 'admin.html');
    this.template = fs.readFileSync(this.htmlTemplatePath, 'utf8');
  }

  rebuildJsxIfNeeded() {
    try {
      const viewsDir = path.resolve(__dirname, 'views');
      const clientBundle = path.resolve(__dirname, '../public/js/admin.bundle.js');
      const ssrBundle = path.resolve(__dirname, '../public/js/admin.ssr.cjs');

      let bundleTime = 0;
      if (fs.existsSync(clientBundle)) {
        bundleTime = fs.statSync(clientBundle).mtimeMs;
      }

      let needsRebuild = bundleTime === 0;
      if (!needsRebuild) {
        const checkDir = (dir) => {
          if (!fs.existsSync(dir)) return;
          const files = fs.readdirSync(dir);
          for (const f of files) {
            const full = path.join(dir, f);
            const stat = fs.statSync(full);
            if (stat.isDirectory()) {
              checkDir(full);
            } else if (f.endsWith('.jsx') || f.endsWith('.js') || f.endsWith('.html')) {
              if (stat.mtimeMs > bundleTime) {
                needsRebuild = true;
                break;
              }
            }
          }
        };
        checkDir(viewsDir);
      }

      if (needsRebuild) {
        const esbuild = require('esbuild');
        const outDir = path.resolve(__dirname, '../public/js');
        if (!fs.existsSync(outDir)) {
          fs.mkdirSync(outDir, { recursive: true });
        }

        // 1. Client Browser Bundle (Unminified for clean human-readable dev inspection)
        esbuild.buildSync({
          entryPoints: [path.join(viewsDir, 'index.jsx')],
          bundle: true,
          outfile: clientBundle,
          minify: false,
          format: 'iife',
          target: ['es2020'],
          define: {
            'process.env.NODE_ENV': '"production"'
          }
        });

        // 2. SSR Bundle
        esbuild.buildSync({
          entryPoints: [path.join(viewsDir, 'App.jsx')],
          bundle: true,
          outfile: ssrBundle,
          format: 'cjs',
          target: ['node18'],
          define: {
            'process.env.NODE_ENV': '"production"'
          }
        });

        console.log('[AdminServer] Auto-recompiled React JSX components on demand.');
      }
    } catch (err) {
      console.warn('[AdminServer] On-demand JSX build failed, serving cached bundle:', err.message);
    }
  }

  async rebuildCssIfNeeded() {
    try {
      const cssPath = path.resolve(__dirname, '../public/css/admin.css');
      const inputCssPath = path.resolve(__dirname, 'styles/input.css');
      const tailwindConfigPath = path.resolve(__dirname, '../tailwind.config.js');

      let cssTime = 0;
      if (fs.existsSync(cssPath)) {
        cssTime = fs.statSync(cssPath).mtimeMs;
      }

      let needsRebuild = cssTime === 0;
      if (!needsRebuild && fs.existsSync(inputCssPath)) {
        if (fs.statSync(inputCssPath).mtimeMs > cssTime) {
          needsRebuild = true;
        }
      }
      if (!needsRebuild && fs.existsSync(tailwindConfigPath)) {
        if (fs.statSync(tailwindConfigPath).mtimeMs > cssTime) {
          needsRebuild = true;
        }
      }

      if (!needsRebuild) {
        const viewsDir = path.resolve(__dirname, 'views');
        const checkViews = (dir) => {
          if (!fs.existsSync(dir)) return;
          const files = fs.readdirSync(dir);
          for (const f of files) {
            const full = path.join(dir, f);
            const stat = fs.statSync(full);
            if (stat.isDirectory()) {
              checkViews(full);
              if (needsRebuild) break;
            } else if (f.endsWith('.jsx') || f.endsWith('.js') || f.endsWith('.html')) {
              if (stat.mtimeMs > cssTime) {
                needsRebuild = true;
                break;
              }
            }
          }
        };
        checkViews(viewsDir);
      }

      if (needsRebuild) {
        const postcss = require('postcss');
        const tailwindcss = require('tailwindcss');
        const autoprefixer = require('autoprefixer');

        const outDir = path.resolve(__dirname, '../public/css');
        if (!fs.existsSync(outDir)) {
          fs.mkdirSync(outDir, { recursive: true });
        }

        const rawCss = fs.readFileSync(inputCssPath, 'utf8');
        const result = await postcss([
          tailwindcss(tailwindConfigPath),
          autoprefixer
        ]).process(rawCss, { from: inputCssPath });

        fs.writeFileSync(cssPath, result.css, 'utf8');
        console.log('[AdminServer] Auto-recompiled Tailwind CSS on demand.');
      }
    } catch (err) {
      console.warn('[AdminServer] On-demand CSS build failed:', err.message);
    }
  }

  renderHtml() {
    this.rebuildJsxIfNeeded();
    try {
      this.template = fs.readFileSync(this.htmlTemplatePath, 'utf8');
    } catch {}

    let html = this.template;

    // Server-Side Rendering (SSR) for React JSX components
    const ssrBundlePath = path.resolve(__dirname, '../public/js/admin.ssr.cjs');
    if (html.includes('<!-- SSR_APP_ROOT -->')) {
      let ssrMarkup = '';
      if (fs.existsSync(ssrBundlePath)) {
        try {
          const resolvedPath = path.resolve(ssrBundlePath);
          delete require.cache[resolvedPath];
          const App = require(resolvedPath).default || require(resolvedPath);
          ssrMarkup = ReactDOMServer.renderToString(React.createElement(App));
        } catch (err) {
          console.warn('[AdminServer] SSR rendering error, falling back to client-side mount:', err.message);
        }
      }
      html = html.replace('<!-- SSR_APP_ROOT -->', ssrMarkup);
    }

    // Resolve modular partial includes: <!-- include:partials/<filename>.html -->
    const includeRegex = /<!--\s*include:([a-zA-Z0-9_\-\/.]+)\s*-->/g;
    html = html.replace(includeRegex, (match, partialPath) => {
      try {
        const fullPartialPath = path.resolve(__dirname, 'views', partialPath);
        if (fs.existsSync(fullPartialPath)) {
          return fs.readFileSync(fullPartialPath, 'utf8');
        }
        console.warn(`[AdminServer] Partial file not found: ${fullPartialPath}`);
        return `<!-- Missing partial: ${partialPath} -->`;
      } catch (err) {
        console.error(`[AdminServer] Error reading partial ${partialPath}:`, err);
        return `<!-- Error including partial: ${partialPath} -->`;
      }
    });

    // Always use empty string '' so client fetch calls hit the merchant admin's own /api proxy!
    // This completely eliminates CORS errors, tunnel downtime 530s, and cross-origin failures.
    const clientApiBase = '';
    html = html.replaceAll('{{API_BASE_URL}}', clientApiBase);
    html = html.replaceAll('{{ANDROID_ENROLLMENT_SECRET}}', process.env.ANDROID_ENROLLMENT_SECRET || 'android_pairing_enrollment_secret_key_32_chars');
    return html;
  }

  createServer() {
    return http.createServer(async (req, res) => {
      const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
      const pathname = url.pathname;

      if (req.method === 'OPTIONS') {
        res.writeHead(204, {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        });
        res.end();
        return;
      }

      // Health
      if (pathname === '/health') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ status: 'UP', service: 'merchant-admin' }));
        return;
      }

      // Admin Tickets API: GET /api/admin/tickets
      if (pathname === '/api/admin/tickets') {
        if (!hasAdminToken(req)) {
          res.writeHead(401, { 'Content-Type': 'application/json', ...BASE_SECURITY_HEADERS });
          res.end(JSON.stringify({ error: 'Unauthorized', code: 'AUTH_REQUIRED' }));
          return;
        }
        const merchants = this.merchantRepo.findAll();
        const mId = merchants[0]?.id || '00000000-0000-0000-0000-000000000001';
        const tickets = this.ticketRepo.findTicketsByMerchant(mId);

        res.writeHead(200, {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          ...BASE_SECURITY_HEADERS
        });
        res.end(JSON.stringify(tickets));
        return;
      }

      // Merged Control Center Supervisor Proxy: /api/services/* and /api/logs/stream -> Control Center on port 8090
      if (pathname.startsWith('/api/services') || pathname === '/api/logs/stream') {
        const ccPort = Number(process.env.CONTROL_CENTER_PORT || 8090);
        const proxyReq = http.request({
          hostname: '127.0.0.1',
          port: ccPort,
          path: req.url,
          method: req.method,
          headers: {
            ...req.headers,
            host: `localhost:${ccPort}`
          }
        }, (proxyRes) => {
          res.writeHead(proxyRes.statusCode, proxyRes.headers);
          proxyRes.pipe(res);
        });

        proxyReq.on('error', (err) => {
          if (!res.headersSent) {
            res.writeHead(502, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Control center supervisor unavailable', details: err.message }));
          }
        });

        req.on('data', chunk => proxyReq.write(chunk));
        req.on('end', () => proxyReq.end());
        return;
      }

      // Transparent API Proxy: /api/* -> Payment Core REST API
      if (pathname.startsWith('/api/')) {
        const targetPort = Number(process.env.PAYMENT_API_PORT || 6100);
        const defaultMerchant = this.merchantRepo.getDefault ? this.merchantRepo.getDefault() : (this.merchantRepo.findById('00000000-0000-0000-0000-000000000001') || this.merchantRepo.findAll()[0]);
        const defaultMerchantId = defaultMerchant?.id || '00000000-0000-0000-0000-000000000001';
        const proxyReq = http.request({
          hostname: '127.0.0.1',
          port: targetPort,
          path: req.url,
          method: req.method,
          headers: {
            ...req.headers,
            'x-merchant-id': req.headers['x-merchant-id'] || defaultMerchantId,
            host: `localhost:${targetPort}`,
            'x-forwarded-host': req.headers.host || '',
            'x-forwarded-proto': req.headers['x-forwarded-proto'] || 'http'
          }
        }, (proxyRes) => {
          res.writeHead(proxyRes.statusCode, proxyRes.headers);
          proxyRes.pipe(res);
        });

        proxyReq.on('error', (err) => {
          if (!res.headersSent) {
            res.writeHead(502, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Gateway API unavailable', details: err.message }));
          }
        });

        req.pipe(proxyReq);
        return;
      }

      // Download Android Companion APK
      if (pathname === '/youpi-sms-gateway.apk' || pathname === '/api/v1/admin/sms-gateway/download-apk') {
        const apkCandidates = [
          path.resolve(__dirname, '../public/youpi-sms-gateway.apk'),
          path.resolve(__dirname, '../../payment-api/public/youpi-sms-gateway.apk'),
          path.resolve(__dirname, '../../android-observer-app/youpi-sms-gateway.apk')
        ];
        let apkPath = null;
        for (const p of apkCandidates) {
          if (fs.existsSync(p)) {
            apkPath = p;
            break;
          }
        }
        if (apkPath) {
          const stat = fs.statSync(apkPath);
          res.writeHead(200, {
            'Content-Type': 'application/vnd.android.package-archive',
            'Content-Disposition': 'attachment; filename="youpi-sms-gateway.apk"',
            'Content-Length': stat.size,
            'Access-Control-Allow-Origin': '*'
          });
          const stream = fs.createReadStream(apkPath);
          stream.pipe(res);
          return;
        }
      }



      // CSS: /src/styles/input.css or /css/*
      if (pathname === '/src/styles/input.css' || pathname.startsWith('/css/')) {
        await this.rebuildCssIfNeeded();
        const cssPath = path.resolve(__dirname, '../public/css/admin.css');
        if (fs.existsSync(cssPath)) {
          const content = fs.readFileSync(cssPath, 'utf8');
          res.writeHead(200, {
            'Content-Type': 'text/css; charset=utf-8',
            'Cache-Control': 'no-cache',
            'Access-Control-Allow-Origin': '*'
          });
          res.end(content);
          return;
        }
      }

      // Vite Module / Source Entry: GET /src/*
      if (pathname.startsWith('/src/')) {
        if (pathname === '/src/views/index.jsx' || pathname.endsWith('.jsx')) {
          this.rebuildJsxIfNeeded();
          const clientBundle = path.resolve(__dirname, '../public/js/admin.bundle.js');
          if (fs.existsSync(clientBundle)) {
            const content = fs.readFileSync(clientBundle, 'utf8');
            res.writeHead(200, {
              'Content-Type': 'application/javascript; charset=utf-8',
              'Cache-Control': 'no-cache',
              'Access-Control-Allow-Origin': '*'
            });
            res.end(content);
            return;
          }
        }
      }

      // Static JavaScript: GET /js/*
      if (pathname.startsWith('/js/')) {
        const jsFile = path.basename(pathname);
        if (jsFile === 'admin.bundle.js') {
          this.rebuildJsxIfNeeded();
        }
        const jsPath = path.resolve(__dirname, '../public/js', jsFile);
        if (fs.existsSync(jsPath)) {
          const content = fs.readFileSync(jsPath, 'utf8');
          res.writeHead(200, {
            'Content-Type': 'application/javascript; charset=utf-8',
            'Cache-Control': 'public, max-age=3600',
            'Access-Control-Allow-Origin': '*'
          });
          res.end(content);
          return;
        }
      }

      // Dashboard View: GET / or GET /admin
      if (pathname === '/' || pathname === '/admin') {
        const html = this.renderHtml();
        res.writeHead(200, {
          'Content-Type': 'text/html; charset=utf-8',
          'Cache-Control': 'no-cache'
        });
        res.end(html);
        return;
      }

      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Admin Route Not Found');
    });
  }
}
