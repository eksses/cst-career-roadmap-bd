import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.js';
import { LanguageProvider } from './context/LanguageContext.js';
import { StudentProvider } from './context/StudentContext.js';
import './index.css';

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <LanguageProvider>
        <StudentProvider>
          <App />
        </StudentProvider>
      </LanguageProvider>
    </React.StrictMode>
  );
}
