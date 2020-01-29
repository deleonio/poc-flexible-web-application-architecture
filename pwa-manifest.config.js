const path = require('path');
module.exports = {
  name: 'Flexible web application architecture',
  short_name: 'PoC',
  description: 'This project demonstrate a flexible Babel and Webpack based web application architecture.',
  lang: 'de-DE',
  start_url: 'https://github.modevel.de/poc/',
  display: 'standalone',
  orientation: 'any',
  theme_color: '#ddd',
  background_color: '#fff',
  filename: 'manifest.json',
  icons: [
    {
      src: path.resolve('public/assets/pwa.icon.png'),
      sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
    }
  ],
  crossorigin: null,
  inject: true,
  fingerprints: false,
  ios: false,
  publicPath: null,
  includeDirectory: true
};
