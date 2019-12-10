module.exports = (argv, config, babelLoader) => {
  const path = require('path');

  babelLoader.use.options.plugins.push('angularjs-annotate');
  config.entry['angularjs'] = path.join(__dirname, '../', 'src', `angularjs.ts`);
};
