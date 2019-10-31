module.exports = {
  include: ['src/**/*.ts', 'src/**/*.tsx'],
  extension: ['.ts', '.tsx'],
  exclude: [
    '**/assets/**/*',
    '**/angular.module.ts',
    '**/angularjs.module.ts',
    '**/inferno.component.ts',
    '**/preact.component.ts',
    '**/react.component.ts',
    '**/*angular.ts',
    '**/*angularjs.ts',
    '**/*inferno.tsx',
    '**/*preact.tsx',
    '**/*react.tsx',
    '**/*svelte.ts',
    '**/*vue.ts',
    '**/*.d.ts',
    '**/*.mock.ts',
    '**/*.spec.ts',
    '**/*.test.ts'
  ],
  all: true,
  cache: true,
  reporter: ['html', 'lcov', 'text'],
  require: ['./babel.register.js'],
  watermarks: {
    lines: [50, 75],
    functions: [50, 75],
    branches: [50, 75],
    statements: [50, 75]
  },
  sourceMap: false,
  instrument: false,
  statements: 0,
  branches: 0,
  functions: 0,
  lines: 0
};
