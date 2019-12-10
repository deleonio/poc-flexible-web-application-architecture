module.exports = (argv, config, babelLoader) => {
  if (argv.analyzer) {
    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
    config.plugins.push(
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        reportFilename: `${argv.framework}.report.html`
      })
    );
  }
  switch (argv.minimizer) {
    case 'closure':
      const ClosureCompilerPlugin = require('closure-webpack-plugin');
      config.optimization.minimizer = [new ClosureCompilerPlugin()];
      break;
    case 'terser':
      const TerserPlugin = require('terser-webpack-plugin');
      config.optimization.minimizer = [new TerserPlugin()];
      break;
    case 'uglifyjs':
      const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
      config.optimization.minimizer = [new UglifyJsPlugin()];
      break;
  }
};
