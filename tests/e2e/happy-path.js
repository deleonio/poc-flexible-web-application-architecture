module.exports = {
  'Test demo': browser => {
    browser
      .url('http://localhost:8080/')
      .waitForElementVisible('div#app')
      .waitForElementVisible('input#new_title')
      .waitForElementVisible('input#new_unit')
      .setValue('input#new_title', 'nightwatch')
      .setValue('input#new_unit', 'nightwatch')
      .click('button#submit-add')
      .waitForElementVisible('button#submit-add')
      .click('button#edit-0')
      .setValue('input#edit_title', 'nightwatch')
      .setValue('input#edit_unit', 'nightwatch')
      .click('button#submit-edit')
      .click('button#delete-0')
      .end();
  }
};
