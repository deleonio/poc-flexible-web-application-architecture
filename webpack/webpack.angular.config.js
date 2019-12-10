module.exports = (argv, config, babelLoader) => {
  const path = require('path');
  const { AngularCompilerPlugin } = require('@ngtools/webpack');

  config.module.rules.push({
    test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
    use: '@ngtools/webpack'
  });
  config.plugins.push(
    new AngularCompilerPlugin({
      tsConfigPath: path.join(__dirname, '../', 'tsconfig.app.json'),
      entryModule: path.join(__dirname, '../', 'src', 'angular.module#AppModule'),
      sourceMap: true
    })
  );
};
