module.exports = (argv, config, babelLoader) => {
  const path = require('path');
  const { AureliaPlugin } = require('aurelia-webpack-plugin');

  config.plugins.push(
    new AureliaPlugin({
      aureliaApp: 'aurelia'
    })
  );
  config.module.rules.push({
    test: /\.html$/,
    loader: 'html-loader',
    options: {
      attrs: false
    }
  });
  config.resolve.alias['aurelia-binding'] = path.resolve(__dirname, '../', 'node_modules/aurelia-binding');
  config.resolve.modules.push('src');
};
