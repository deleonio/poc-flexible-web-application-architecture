module.exports = {
  plugins: [],
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['last 2 version', 'ie >= 11']
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  env: {
    test: {
      plugins: [
        'istanbul',
        [
          'search-and-replace',
          {
            rules: [
              {
                search: /.*?\.html/gi,
                replace: '@babel/core'
              },
              {
                search: '$$ENVNAME$$',
                replace: 'oev'
              },
              {
                search: '$$TPLNAME$$',
                replace: 'vkb'
              }
            ]
          }
        ]
      ]
    }
  },
  sourceMaps: true,
  retainLines: true
};
