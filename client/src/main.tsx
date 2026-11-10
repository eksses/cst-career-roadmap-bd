import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.js';
import { LanguageProvider } from './context/LanguageContext.js';
import { StudentProvider } from './context/StudentContext.js';
import { ErrorBoundary } from './components/ErrorBoundary.js';
import './index.css';

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ErrorBoundary>
        <LanguageProvider>
          <StudentProvider>
            <App />
          </StudentProvider>
        </LanguageProvider>
      </ErrorBoundary>
    </React.StrictMode>
  );
}
