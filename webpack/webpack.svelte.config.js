module.exports = (
  babelConfigPlugins,
  babelConfigPresets,
  webpackAdditionals,
  webpackEntries,
  webpackResolveModules
) => {
  const path = require('path');

  babelConfigPresets.push('@babel/preset-typescript');
  webpackAdditionals.Loaders.push({
    test: /\.svelte$/,
    exclude: /node_modules/,
    use: 'svelte-loader'
  });
  webpackEntries.svelte = path.join(__dirname, '../', 'src', `svelte.ts`);
};
