module.exports = (
  babelConfigPlugins,
  babelConfigPresets,
  webpackAdditionals,
  webpackEntries,
  webpackResolveModules
) => {
  const path = require('path');

  babelConfigPlugins.push([
    'babel-plugin-inferno',
    {
      imports: true
    }
  ]);
  babelConfigPresets.push('@babel/preset-typescript');
  webpackEntries.inferno = path.join(__dirname, '../', 'src', `inferno.tsx`);
};
