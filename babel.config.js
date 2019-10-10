module.exports = {
  plugins: [
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
        loose: true
      }
    ],
    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: true
      }
    ]
  ],
  presets: ['@babel/preset-env', '@babel/typescript'],
  env: {
    test: {
      plugins: ['istanbul']
    }
  }
};
