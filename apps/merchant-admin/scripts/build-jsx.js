import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import esbuild from 'esbuild';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const baseDir = path.resolve(__dirname, '..');
const viewsDir = path.join(baseDir, 'src/views');
const outDir = path.join(baseDir, 'public/js');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

console.log('[build-jsx] Compiling React JSX components...');

// 1. Client Browser Bundle (IIFE)
const clientOut = path.join(outDir, 'admin.bundle.js');
esbuild.buildSync({
  entryPoints: [path.join(viewsDir, 'index.jsx')],
  bundle: true,
  outfile: clientOut,
  minify: true,
  format: 'iife',
  target: ['es2020'],
  define: {
    'process.env.NODE_ENV': '"production"'
  }
});

console.log(`[build-jsx] Client bundle written: ${clientOut} (${fs.statSync(clientOut).size} bytes)`);

// 2. Server-Side SSR Bundle (CommonJS)
const ssrOut = path.join(outDir, 'admin.ssr.cjs');
esbuild.buildSync({
  entryPoints: [path.join(viewsDir, 'App.jsx')],
  bundle: true,
  outfile: ssrOut,
  format: 'cjs',
  target: ['node18'],
  define: {
    'process.env.NODE_ENV': '"production"'
  }
});

console.log(`[build-jsx] SSR bundle written: ${ssrOut} (${fs.statSync(ssrOut).size} bytes)`);
console.log('[build-jsx] Build completed successfully.');
