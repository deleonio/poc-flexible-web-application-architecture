module.exports = (argv, config, babelLoader) => {
  const path = require('path');

  config.entry['vanilla'] = path.join(__dirname, '../', 'src', `vanilla.ts`);
};
