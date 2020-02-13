const allure2 = require("nightwatch-allure2-adapter");

module.exports = {
  /**
   * After all the tests are run, evaluate if there were errors and exit appropriately.
   *
   * If there were failures or errors, exit 1, else exit 0.
   *
   * @param results
   */
  reporter: allure2.write
};
