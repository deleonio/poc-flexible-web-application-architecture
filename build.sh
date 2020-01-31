rm -rf dist

lean build --gzip --framework angular
mv dist/index.html dist/angular.html

lean build --gzip --framework angularjs
mv dist/index.html dist/angularjs.html

lean build --gzip --framework aurelia
mv dist/index.html dist/aurelia.html

lean build --gzip --framework inferno
mv dist/index.html dist/inferno.html

lean build --gzip --framework preact
mv dist/index.html dist/preact.html

lean build --gzip --framework react
mv dist/index.html dist/react.html

lean build --gzip --framework svelte
mv dist/index.html dist/svelte.html

lean build --gzip
mv dist/index.html dist/vanilla.html

lean build --gzip --framework vue
mv dist/index.html dist/vue.html

mv dist/all.html dist/index.html

workbox generateSW workbox-config.js
