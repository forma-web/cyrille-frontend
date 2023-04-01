import React from 'react';
import ReactDOM from 'react-dom/client';
import { init as SentryInit, BrowserTracing } from '@sentry/react';
import './assets/fonts/stylesheet.scss';
import './assets/styles/index.scss';
import App from './App/App';

SentryInit({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  integrations: [new BrowserTracing()],
  tracesSampleRate: parseFloat(
    import.meta.env.VITE_SENTRY_TRACES_SAMPLE_RATE ?? '1.0',
  ),
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
