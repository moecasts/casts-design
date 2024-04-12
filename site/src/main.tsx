import React from 'react';
import { RdProvider } from '@casts/rd-vite/client/components';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from '../packages/rd-theme/src';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <RdProvider>
        <App />
      </RdProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
