const path = require('path');
// const util = require('util');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const packageJson = require('./package.json');

module.exports = (env, argv) => {
  const babelConfigPlugins = [];
  const babelConfigPresets = [];
  const webpackAdditionalLoaders = [];
  const webpackAdditionalPlugins = [];
  const webpackEntries = {};
  switch (env.framework) {
    case 'angular':
      webpackEntries.angular = path.join(__dirname, 'src', `angular.ts`);
      break;
    case 'angularjs':
      babelConfigPlugins.push('angularjs-annotate');
      webpackEntries.angularjs = path.join(__dirname, 'src', `angularjs.ts`);
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
      // babelConfigPresets.push('@babel/preset-react');
      webpackEntries.react = path.join(__dirname, 'src', `react.tsx`);
      break;
    case 'vue':
      webpackAdditionalLoaders.push({
        test: /\.vue$/,
        loader: 'vue-loader'
      });
      webpackAdditionalPlugins.push(new VueLoaderPlugin());
      webpackEntries.vue = path.join(__dirname, 'src', `vue.ts`);
      break;
    default:
      console.log(`
[ERROR] No or an invalid framework identifier was given. Use: angular, angularjs, inferno, preact, react or vue
        > yarn serve inferno
`);
      process.exit(1);
  }

  switch (env.framework) {
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

  const config = {
    entry: webpackEntries,
    output: {
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: webpackAdditionalLoaders.concat([
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
    plugins: [
      new CopyWebpackPlugin([{ from: 'src/assets', to: 'assets' }]),
      new HtmlWebpackPlugin({
        author: packageJson.author,
        description: packageJson.description,
        filename: argv.mode === 'production' ? `${env.framework}.html` : `index.html`,
        name: packageJson.name,
        template: 'index.html',
        title: 'PoC - Flexible web application architecture',
        version: packageJson.version
      })
    ].concat(webpackAdditionalPlugins),
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue']
    }
  };

  switch (argv.mode) {
    case 'production':
      break;
    default:
      config.devtool = 'source-map';
  }

  // console.log(util.inspect(config, true, null, true));

  return config;
};
