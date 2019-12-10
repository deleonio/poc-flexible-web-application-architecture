const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// There are optional features
const optionalWebpackConfig = require('./webpack/webpack.addons.config');

module.exports = (env, argv) => {
  const BABEL_LOADER = {
    test: /\.(j|t)sx?$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        plugins: [],
        presets: ['@babel/preset-typescript']
      }
    }
  };

  const config = {
    entry: {},
    output: {
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [BABEL_LOADER]
    },
    optimization: {
      minimizer: undefined
    },
    plugins: [
      new CopyWebpackPlugin([{ from: 'public/', to: '' }]),
      new HtmlWebpackPlugin({
        filename: argv.mode === 'production' ? `${argv.framework}.html` : 'index.html',
        template: 'template.html'
      })
    ],
    resolve: {
      alias: {},
      modules: ['node_modules'],
      extensions: ['.mjs', '.js', '.jsx', '.svelte', '.ts', '.tsx', '.vue']
    }
  };

  try {
    require(`./webpack/webpack.${argv.framework}.config`)(argv, config, BABEL_LOADER);
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
  optionalWebpackConfig(argv, config);

  return config;
};
