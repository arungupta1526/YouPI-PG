import React from 'react';
import { createRoot } from 'react-dom/client';
import '../styles/input.css';
import App from './App.jsx';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
