module.exports = (argv, config, babelLoader) => {
  const path = require('path');

  babelLoader.use.options.plugins.push('@babel/plugin-transform-react-jsx');
  config.entry['react'] = path.join(__dirname, '../', 'src', `react.tsx`);
};
