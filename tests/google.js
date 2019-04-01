module.exports = {
  'Simple Google test' : function (browser) {

    let url = 'http://www.google.com';
    let expectedTitle = 'Google';
    let searchBox = '#tsf > div:nth-child(2) > div > div.RNNXgb > div > div.a4bIc > input';
    let searchString = 'nightwatch.js';
    let searchButton = '#tsf > div:nth-child(2) > div > div.UUbT9 > div.aajZCb > div > center > input[type="submit"]:nth-child(1)';
    let searchResult = '#rso > div:nth-child(1) > div > div:nth-child(1) > div > div > div.r > a > h3';
    let expectedResult = 'Node.js powered End-to-End testing framework';
    let nothing = '';

    browser
      // go to website, wait until body is loaded
      .url(url)
      // .waitForElementVisible('body', 10000)

      // make sure expected title matches & search box is visible
      .assert.title(expectedTitle)
      .assert.visible(searchBox)

      // enter search string in search box, click search button
      .setValue(searchBox, searchString)
      .waitForElementVisible(searchButton, 1000)
      .click(searchButton)

      // wait for results, then verify expected string
      .waitForElementVisible(searchResult, 15000)
      .assert.containsText(searchResult, expectedResult)

      // cleanup, shutdown browser
      .end();
  }
};