import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    path.join(__dirname, 'src/**/*.{html,jsx,js}').replace(/\\/g, '/'),
    path.join(__dirname, 'public/**/*.js').replace(/\\/g, '/'),
    "./apps/merchant-admin/src/**/*.{html,jsx,js}",
    "./apps/merchant-admin/public/**/*.js",
    "./src/**/*.{html,jsx,js}",
    "./public/**/*.js"
  ],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        theme: {
          bg: 'var(--bg)',
          card: 'var(--bg-card)',
          surface: 'var(--bg-surface)',
          border: 'var(--border)',
          text: 'var(--text)',
          muted: 'var(--text-muted)',
          primary: 'var(--primary)',
        }
      }
    },
  },
  plugins: [],
};
