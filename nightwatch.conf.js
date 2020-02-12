const path = require('path');

module.exports = {
  src_folders: ['tests/e2e'],
  globals_path: './nightwatch.global.js',
  webdriver: {
    start_process: true,
    server_path: require('chromedriver').path,
    port: 9515
  },
  test_settings: {
    default: {
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          w3c: false
        }
      }
    },
    selenium: {
      // Selenium Server is running locally and is managed by Nightwatch
      selenium: {
        port: 4444,
        host: 'triton927.startdedicated.de'
      },
      webdriver: {
        start_process: false,
        port: 4444
      }
    },
    'selenium.chrome': {
      extends: 'selenium',
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          w3c: false
        }
      }
    },
    'selenium.firefox': {
      extends: 'selenium',
      desiredCapabilities: {
        browserName: 'firefox'
      }
    }
  }
};
