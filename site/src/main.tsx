import React from 'react';
import { ConfigProvider } from '@casts/config-provider';
import { enUS } from '@casts/locale';
import { RdProvider } from '@casts/rd-vite/client/components';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from '../packages/rd-theme/src';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider locale={enUS}>
      <BrowserRouter>
        <RdProvider>
          <App />
        </RdProvider>
      </BrowserRouter>
    </ConfigProvider>
  </React.StrictMode>,
);
