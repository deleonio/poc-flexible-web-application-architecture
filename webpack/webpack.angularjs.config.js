module.exports = (argv, config, babelLoader) => {
  babelLoader.use.options.plugins.push('angularjs-annotate');
};
