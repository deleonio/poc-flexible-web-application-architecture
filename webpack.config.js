const path = require('path');

const { AngularCompilerPlugin } = require('@ngtools/webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const optionalWebpackConfig = require('./webpack.config.addons');

module.exports = (env, argv) => {
  const babelConfigPlugins = [];
  const babelConfigPresets = [];
  const webpackAdditionalLoaders = [];
  const webpackAdditionalPlugins = [];
  const webpackEntries = {};
  switch (env.framework) {
    case 'angular':
      webpackAdditionalLoaders.push({
        test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
        use: '@ngtools/webpack'
      });
      webpackAdditionalPlugins.push(
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
      webpackAdditionalLoaders.push({
        test: /\.svelte$/,
        exclude: /node_modules/,
        use: 'svelte-loader'
      });
      webpackEntries.svelte = path.join(__dirname, 'src', `svelte.ts`);
      break;
    case 'vue':
      webpackAdditionalLoaders.push({
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader'
      });
      webpackAdditionalPlugins.push(new VueLoaderPlugin());
      webpackEntries.vue = path.join(__dirname, 'src', `vue.ts`);
      break;
    default:
      console.log(`
[ERROR] No or an invalid framework identifier was given. Use: angular, angularjs, inferno, preact, react, svelte or vue
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

  optionalWebpackConfig(env, argv, webpackAdditionalPlugins);

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
      new CopyWebpackPlugin([{ from: 'src/assets', to: 'assets' }, { from: 'index.html', to: 'index.html' }])
    ].concat(webpackAdditionalPlugins),
    resolve: {
      extensions: ['.mjs', '.js', '.jsx', '.svelte', '.ts', '.tsx', '.vue']
    }
  };

  return config;
};
