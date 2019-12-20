module.exports = (argv, config, babelLoader) => {
  const VueLoaderPlugin = require('vue-loader/lib/plugin');
  const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');

  config.module.rules.push({
    test: /\.vue$/,
    exclude: /node_modules/,
    loader: 'vue-loader'
  });
  config.module.rules.push({
    test: /\.css$/,
    use: ['vue-style-loader', 'css-loader']
  });

  config.plugins.push(new VueLoaderPlugin());
  config.plugins.push(new VuetifyLoaderPlugin());
};
