const ACTION_DELAY = 1500;

function testFall(host) {
  return (browser) => {
    console.log(`http://${host}`);
    try {
      browser
      .url(`http://${host}`)
      .pause(ACTION_DELAY)
      .waitForElementVisible('h1')
      .pause(ACTION_DELAY)
      .click('#edit-0')
      .pause(ACTION_DELAY)
      .clearValue ('#edit_title')
      .pause(ACTION_DELAY)
      .setValue('#edit_title', 'Baum')
      .pause(ACTION_DELAY)
      .click('#submit')
      .pause(ACTION_DELAY)
      .click('#add')
      .pause(ACTION_DELAY)
      .setValue('#new_title', 'Äpfel')
      .pause(ACTION_DELAY)
      .setValue('#new_unit', 'Pack')
      .pause(ACTION_DELAY)
      .click('#submit')
      .pause(ACTION_DELAY)
      .click('#edit-0')
      .pause(ACTION_DELAY)
      .click('#delete')
      .pause(ACTION_DELAY)
      .click('#edit-1')
      .pause(ACTION_DELAY)
      .click('#delete')
      .pause(ACTION_DELAY)
      .click('#edit-2')
      .pause(ACTION_DELAY)
      .click('#delete')
      .pause(ACTION_DELAY)
      .click('#start')
      .pause(60000)
      .end();
    } catch (e) {}
  };
}

let tests = {};
[
  'https://github.modevel.de/poc/'
].forEach((host) => {
  tests[host] = testFall(host);
});
module.exports = tests;
