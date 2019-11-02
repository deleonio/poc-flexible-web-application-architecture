const path = require('path');

const { AngularCompilerPlugin } = require('@ngtools/webpack');
const { AureliaPlugin } = require('aurelia-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

// There are optional features
const optionalWebpackConfig = require('./webpack.config.addons');

module.exports = (env, argv) => {
  const babelConfigPlugins = [];
  const babelConfigPresets = [];
  const webpackAdditionals = {
    Loaders: [],
    Plugins: []
  };
  const webpackEntries = {};
  switch (argv.framework) {
    case 'angular':
      webpackAdditionals.Loaders.push({
        test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
        use: '@ngtools/webpack'
      });
      webpackAdditionals.Plugins.push(
        new AngularCompilerPlugin({
          tsConfigPath: path.join(__dirname, `tsconfig.app.json`),
          entryModule: path.join(__dirname, 'src', `angular.module#AppModule`),
          sourceMap: true
        })
      );
      webpackEntries.angular = path.join(__dirname, 'src', `angular.ts`);
      break;
    case 'angularjs':
      babelConfigPlugins.push('angularjs-annotate');
      webpackEntries.angularjs = path.join(__dirname, 'src', `angularjs.ts`);
      break;
    case 'aurelia':
      webpackAdditionals.Plugins.push(
        new AureliaPlugin({
          aureliaApp: 'app'
        })
      );
      webpackEntries.aurelia = path.join(__dirname, 'src', `aurelia.ts`);
      break;
    case 'inferno':
      babelConfigPlugins.push([
        'babel-plugin-inferno',
        {
          imports: true
        }
      ]);
      webpackEntries.inferno = path.join(__dirname, 'src', `inferno.tsx`);
      break;
    case 'preact':
      babelConfigPlugins.push(['@babel/plugin-transform-react-jsx', { pragma: 'h' }]);
      webpackEntries.preact = path.join(__dirname, 'src', `preact.tsx`);
      break;
    case 'react':
      babelConfigPlugins.push('@babel/plugin-transform-react-jsx');
      webpackEntries.react = path.join(__dirname, 'src', `react.tsx`);
      break;
    case 'svelte':
      webpackAdditionals.Loaders.push({
        test: /\.svelte$/,
        exclude: /node_modules/,
        use: 'svelte-loader'
      });
      webpackEntries.svelte = path.join(__dirname, 'src', `svelte.ts`);
      break;
    case 'vue':
      webpackAdditionals.Loaders.push({
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader'
      });
      webpackAdditionals.Plugins.push(new VueLoaderPlugin());
      webpackEntries.vue = path.join(__dirname, 'src', `vue.ts`);
      break;
    default:
      console.log(`
[ERROR] No or an invalid framework identifier was given. Use: angular, angularjs, inferno, preact, react, svelte or vue
        > yarn serve inferno
`);
      process.exit(1);
  }

  switch (argv.framework) {
    case 'preact':
      babelConfigPresets.push([
        '@babel/typescript',
        {
          jsxPragma: 'h'
        }
      ]);
      break;
    default:
      babelConfigPresets.push('@babel/typescript');
  }

  // Optional features hook
  optionalWebpackConfig(argv, webpackAdditionals);

  const config = {
    entry: webpackEntries,
    output: {
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: webpackAdditionals.Loaders.concat([
        {
          test: /\.(j|t)sx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              plugins: babelConfigPlugins,
              presets: babelConfigPresets
            }
          }
        }
      ])
    },
    optimization: {
      minimizer: webpackAdditionals.Minimizers
    },
    plugins: [
      new CopyWebpackPlugin([
        { from: 'src/assets', to: 'assets' },
        { from: 'index.html', to: 'index.html' },
        { from: 'manifest.json', to: 'manifest.json' },
        { from: 'service-worker.js', to: 'service-worker.js' }
      ])
    ].concat(webpackAdditionals.Plugins),
    resolve: {
      alias: {
        inferno: argv.mode === 'production' ? 'inferno/dist/index.esm.js' : 'inferno/dist/index.dev.esm.js'
      },
      extensions: ['.mjs', '.js', '.jsx', '.svelte', '.ts', '.tsx', '.vue']
    }
  };

  return config;
};
