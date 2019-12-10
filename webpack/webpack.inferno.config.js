module.exports = (argv, config, babelLoader) => {
  const path = require('path');

  babelLoader.use.options.plugins.push([
    'babel-plugin-inferno',
    {
      imports: true
    }
  ]);
  config.entry['inferno'] = path.join(__dirname, '../', 'src', `inferno.tsx`);
  config.resolve.alias.inferno =
    argv.mode === 'production' ? 'inferno/dist/index.esm.js' : 'inferno/dist/index.dev.esm.js';
};
