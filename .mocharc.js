'use strict';

// Here's a JavaScript-based config file.
// If you need conditional logic, you might want to use this type of config.
// Otherwise, JSON or YAML is recommended.

module.exports = {
  require: [
    'babel.register', // babel.register.js statt @babel/register - https://babeljs.io/docs/en/babel-register
    'jsdom-global/register',
    'esm',
    'mock-local-storage'
  ],
  spec: 'src/**/*.test.*s*'
};
