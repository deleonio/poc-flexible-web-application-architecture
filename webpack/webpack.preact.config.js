module.exports = (argv, config, babelLoader) => {
  const path = require('path');

  babelLoader.use.options.plugins.push(['@babel/plugin-transform-react-jsx', { pragma: 'h' }]);
  babelLoader.use.options.presets = [
    [
      '@babel/preset-typescript',
      {
        jsxPragma: 'h'
      }
    ]
  ];
  config.entry['preact'] = path.join(__dirname, '../', 'src', `preact.tsx`);
};
