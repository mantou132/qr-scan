import { render, html } from '@mantou/gem';
import '../../';

const init = (result: string) => {
  render(
    html`
      <style>
        body {
          font-family: 'Ropa Sans', sans-serif;
        }
        main {
          margin: auto;
          width: 640px;
        }
        qr-scan {
          margin-bottom: 30px;
        }
        video {
          width: 100%;
          height: 100%;
        }
        p {
          background-color: #eee;
          padding: 30px;
        }
      </style>
      <main>
        <h1>${'自定义元素 <qr-scan>，使用 wasm'}</h1>
        <a href="https://cozmo.github.io/jsQR/" target="_blank">jsQR 版本</a>
        <qr-scan width="1200" height="620" bound="true" @detected=${(event: CustomEvent) => init(event.detail)}>
          <video slot="video"></video>
        </qr-scan>
        <p>${result || 'No QR code detected.'}</p>
      </main>
    `,
    document.body,
  );
};

init('');
