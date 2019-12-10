module.exports = (
  babelConfigPlugins,
  babelConfigPresets,
  webpackAdditionals,
  webpackEntries,
  webpackResolveModules
) => {
  const path = require('path');
  const { AureliaPlugin } = require('aurelia-webpack-plugin');

  babelConfigPresets.push('@babel/preset-typescript');
  webpackAdditionals.Plugins.push(
    new AureliaPlugin({
      aureliaApp: 'aurelia'
    })
  );
  webpackAdditionals.Loaders.push({
    test: /\.html$/,
    loader: 'html-loader',
    options: {
      attrs: false
    }
  });
  webpackEntries.aurelia = path.join(__dirname, '../', 'src', `aurelia.ts`);
  webpackResolveModules.push('src');
};
