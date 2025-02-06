import React from 'react';
import { RdProvider } from '@casts/rd-vite/client/components';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Writable } from 'stream';

import App from './App';

class HtmlWritable extends Writable {
  chunks: Buffer[] = [];
  html = '';

  getHtml() {
    return this.html;
  }

  _write(chunk: Buffer, _encoding: BufferEncoding, callback: () => void) {
    this.chunks.push(chunk);
    callback();
  }

  _final(callback: () => void) {
    this.html = this.chunks.map((chunk) => chunk.toString()).join(' ');
    callback();
  }
}

export async function render(location: string) {
  const html = await new Promise((resolve, reject) => {
    const htmlWritable = new HtmlWritable();

    const stream = ReactDOMServer.renderToPipeableStream(
      <React.StrictMode>
        <StaticRouter location={location}>
          <RdProvider>
            <App />
          </RdProvider>
        </StaticRouter>
      </React.StrictMode>,
      {
        onAllReady() {
          stream.pipe(htmlWritable);
        },
        onError(error) {
          reject(error);
        },
      },
    );

    htmlWritable.on('finish', () => {
      resolve(htmlWritable.getHtml());
    });
  });

  return { html };
}
