module.exports = (
  babelConfigPlugins,
  babelConfigPresets,
  webpackAdditionals,
  webpackEntries,
  webpackResolveModules
) => {
  const path = require('path');
  const VueLoaderPlugin = require('vue-loader/lib/plugin');

  babelConfigPresets.push('@babel/preset-typescript');
  webpackAdditionals.Loaders.push({
    test: /\.vue$/,
    exclude: /node_modules/,
    loader: 'vue-loader'
  });
  webpackAdditionals.Plugins.push(new VueLoaderPlugin());
  webpackEntries.vue = path.join(__dirname, '../', 'src', `vue.ts`);
};
