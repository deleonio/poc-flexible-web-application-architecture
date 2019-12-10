module.exports = (argv, config, babelLoader) => {
  const path = require('path');

  config.module.rules.push({
    test: /\.svelte$/,
    exclude: /node_modules/,
    use: 'svelte-loader'
  });
  config.entry['svelte'] = path.join(__dirname, '../', 'src', `svelte.ts`);
};
