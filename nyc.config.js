module.exports = {
  include: ['src/**/*.ts'],
  extension: ['.ts', '.tsx'],
  exclude: ['**/assets/**/*', '**/*.mock.ts', '**/*.spec.ts', '**/*.test.ts'],
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
  statements: 50,
  branches: 50,
  functions: 50,
  lines: 50
};
