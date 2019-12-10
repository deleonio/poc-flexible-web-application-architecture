module.exports = (argv, config, babelLoader) => {
  const VueLoaderPlugin = require('vue-loader/lib/plugin');

  config.module.rules.push({
    test: /\.vue$/,
    exclude: /node_modules/,
    loader: 'vue-loader'
  });
  config.plugins.push(new VueLoaderPlugin());
};
