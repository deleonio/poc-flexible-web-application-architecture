module.exports = (argv, config, babelLoader) => {
  config.module.rules.push({
    test: /\.svelte$/,
    exclude: /node_modules/,
    use: 'svelte-loader'
  });
};
