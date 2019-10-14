module.exports = {
  'Test demo': browser => {
    browser
      .url('http://localhost:8080/')
      .waitForElementVisible('div#app')
      // .assert.titleContains('Ecosia')
      // .assert.visible('input[type=search]')
      // .setValue('input[type=search]', 'nightwatch')
      // .assert.visible('button[type=submit]')
      // .click('button[type=submit]')
      // .assert.containsText('.mainline-results', 'Nightwatch.js')
      .end();
  }
};
