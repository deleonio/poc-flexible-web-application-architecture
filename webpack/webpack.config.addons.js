module.exports = (argv, webpackAdditionals) => {
  if (argv.analyzer) {
    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
    webpackAdditionals.Plugins.push(
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        reportFilename: `${argv.framework}.report.html`
      })
    );
  }
  switch (argv.minimizer) {
    case 'closure':
      const ClosureCompilerPlugin = require('closure-webpack-plugin');
      webpackAdditionals.Minimizers = [new ClosureCompilerPlugin()];
      break;
    case 'terser':
      const TerserPlugin = require('terser-webpack-plugin');
      webpackAdditionals.Minimizers = [new TerserPlugin()];
      break;
    case 'uglifyjs':
      const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
      webpackAdditionals.Minimizers = [new UglifyJsPlugin()];
      break;
  }
};
