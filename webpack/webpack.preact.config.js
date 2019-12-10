module.exports = (
  babelConfigPlugins,
  babelConfigPresets,
  webpackAdditionals,
  webpackEntries,
  webpackResolveModules
) => {
  const path = require('path');

  babelConfigPlugins.push(['@babel/plugin-transform-react-jsx', { pragma: 'h' }]);
  babelConfigPresets.push([
    '@babel/preset-typescript',
    {
      jsxPragma: 'h'
    }
  ]);
  webpackEntries.preact = path.join(__dirname, '../', 'src', `preact.tsx`);
};
