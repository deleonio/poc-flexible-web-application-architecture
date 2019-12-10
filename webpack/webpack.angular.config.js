module.exports = (
  babelConfigPlugins,
  babelConfigPresets,
  webpackAdditionals,
  webpackEntries,
  webpackResolveModules
) => {
  const path = require('path');
  const { AngularCompilerPlugin } = require('@ngtools/webpack');

  babelConfigPresets.push('@babel/preset-typescript');
  webpackAdditionals.Loaders.push({
    test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
    use: '@ngtools/webpack'
  });
  webpackAdditionals.Plugins.push(
    new AngularCompilerPlugin({
      tsConfigPath: path.join(__dirname, '../', 'tsconfig.app.json'),
      entryModule: path.join(__dirname, '../', 'src', 'angular.module#AppModule'),
      sourceMap: true
    })
  );
  webpackEntries.angular = path.join(__dirname, '../', 'src', 'angular.ts');
};
