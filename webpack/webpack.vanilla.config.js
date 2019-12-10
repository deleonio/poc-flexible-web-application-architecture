module.exports = (
  babelConfigPlugins,
  babelConfigPresets,
  webpackAdditionals,
  webpackEntries,
  webpackResolveModules
) => {
  const path = require('path');

  babelConfigPresets.push('@babel/preset-typescript');
  webpackEntries.vanilla = path.join(__dirname, '../', 'src', `vanilla.ts`);
};
