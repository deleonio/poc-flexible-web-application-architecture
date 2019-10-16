const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = (env, argv, webpackAdditionalPlugins) => {
  if (env.analyzer) {
    webpackAdditionalPlugins.push(
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        reportFilename: `${env.framework}.report.html`
      })
    );
  }

  return config;
};
