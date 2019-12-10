const chromedriver = require('chromedriver');

module.exports = {
  src_folders: ['e2e'],
  globals_path: './nightwatch.global.js',
  webdriver: {
    start_process: true,
    server_path: chromedriver.path,
    port: 9515,
    cli_args: ['--verbose']
  },
  test_settings: {
    default: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: {
          args: ['disable-web-security', 'no-sandbox', 'start-maximized']
        }
      }
    },
    headless: {
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          args: ['disable-web-security', 'headless', 'no-sandbox', 'start-maximized']
        }
      }
    }
  }
};
