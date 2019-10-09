module.exports = {
  plugins: [
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true
      }
    ],
    ['@babel/plugin-proposal-class-properties']
  ],
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['last 2 version', 'ie >= 11']
        }
      }
    ],
    [
      '@babel/typescript',
      {
        isTSX: true,
        allExtensions: true
      }
    ]
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
