module.exports = (argv, config, babelLoader) => {
  const path = require('path');

  babelLoader.use.options.plugins.push('angularjs-annotate');
};
