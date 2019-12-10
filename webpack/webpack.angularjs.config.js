module.exports = (
  babelConfigPlugins,
  babelConfigPresets,
  webpackAdditionals,
  webpackEntries,
  webpackResolveModules
) => {
  const path = require('path');

  babelConfigPlugins.push('angularjs-annotate');
  babelConfigPresets.push('@babel/preset-typescript');
  webpackEntries.angularjs = path.join(__dirname, '../', 'src', `angularjs.ts`);
};
