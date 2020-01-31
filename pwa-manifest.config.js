const path = require('path');
module.exports = {
  name: 'PoC - SPA/PWA',
  short_name: 'SPA/PWA',
  description: 'This project demonstrate a flexible Babel and Webpack based web application architecture.',
  lang: 'de-DE',
  start_url: 'index.html',
  display: 'fullscreen',
  orientation: 'portrait',
  theme_color: '#C8A2C8',
  background_color: '#DCD0FF',
  filename: 'manifest.json',
  icons: [
    {
      src: path.resolve('public/assets/pwa.icon.png'),
      sizes: [96, 128, 192, 256, 384, 512]
    }
  ],
  crossorigin: null,
  inject: true,
  fingerprints: false,
  ios: false,
  publicPath: null,
  includeDirectory: true
};
