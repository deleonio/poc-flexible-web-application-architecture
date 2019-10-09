const path = require('path');
// const util = require('util');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const packageJson = require('./package.json');

module.exports = (env, argv) => {
  const babelConfigPlugins = [];
  const babelConfigPresets = [];
  const webpackAdditionalLoaders = [];
  const webpackAdditionalPlugins = [];
  switch (env.framework) {
    case 'angular':
      break;
    case 'angularjs':
      babelConfigPlugins.push('angularjs-annotate');
      break;
    case 'inferno':
      babelConfigPlugins.push([
        'babel-plugin-inferno',
        {
          imports: true
        }
      ]);
      break;
    case 'react':
      babelConfigPresets.push('@babel/preset-react');
      break;
    case 'vue':
      webpackAdditionalLoaders.push({
        test: /\.vue$/,
        loader: 'vue-loader'
      });
      webpackAdditionalPlugins.push(new VueLoaderPlugin());
      break;
    default:
      console.log(`
[ERROR] No or an invalid framework identifier was given. Use: angular, angularjs, inferno, react or vue
        > npm run serve inferno
`);
      process.exit(1);
  }

  const config = {
    entry: path.join(__dirname, 'src', `${env.framework}.main.ts`),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: webpackAdditionalLoaders.concat([
        {
          test: /\.(m?(j|t)sx?)$/,
          exclude: /(node_modules|bower_components)/,
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
      new CleanWebpackPlugin(),
      new CopyWebpackPlugin([{ from: 'src/assets', to: 'assets' }]),
      new HtmlWebpackPlugin({
        author: packageJson.author,
        description: packageJson.description,
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
