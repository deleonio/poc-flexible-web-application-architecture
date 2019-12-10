module.exports = (
  babelConfigPlugins,
  babelConfigPresets,
  webpackAdditionals,
  webpackEntries,
  webpackResolveModules
) => {
  const path = require('path');

  babelConfigPlugins.push('@babel/plugin-transform-react-jsx');
  babelConfigPresets.push('@babel/preset-typescript');
  webpackEntries.react = path.join(__dirname, '../', 'src', `react.tsx`);
};
