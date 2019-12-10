const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// There are optional features
const optionalWebpackConfig = require('./webpack/webpack.config.addons');

module.exports = (env, argv) => {
  const babelConfigPlugins = [];
  const babelConfigPresets = [];
  const webpackAdditionals = {
    Loaders: [],
    Plugins: []
  };
  const webpackEntries = {};
  const webpackResolveModules = ['node_modules'];
  try {
    require(`./webpack/webpack.${argv.framework}.config`)(
      babelConfigPlugins,
      babelConfigPresets,
      webpackAdditionals,
      webpackEntries,
      webpackResolveModules
    );
  } catch (error) {
    if (/Cannot find module.+webpack..+.config/.test(error)) {
      console.log(`
[ERROR] No or an invalid framework identifier was given. Use: angular, angularjs, inferno, preact, react, svelte or vue
        > yarn serve inferno
`);
      process.exit(1);
    } else {
      throw error;
    }
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
      new CopyWebpackPlugin([{ from: 'public/', to: '' }]),
      new HtmlWebpackPlugin({
        filename: argv.mode === 'production' ? `${argv.framework}.html` : 'index.html',
        template: 'template.html'
      })
    ].concat(webpackAdditionals.Plugins),
    resolve: {
      alias: {
        'aurelia-binding': path.resolve(__dirname, 'node_modules/aurelia-binding'),
        inferno: argv.mode === 'production' ? 'inferno/dist/index.esm.js' : 'inferno/dist/index.dev.esm.js'
      },
      modules: webpackResolveModules,
      extensions: ['.mjs', '.js', '.jsx', '.svelte', '.ts', '.tsx', '.vue']
    }
  };

  return config;
};
