import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './styles.css';

const rootNode = document.getElementById('app');
if (rootNode) {
  createRoot(rootNode)
    .render(<App />);
}