/* eslint-disable func-names */
/* eslint-disable no-unused-expressions */
// Project Dependencies
const { Given, When, Then } = require('cucumber');
const { expect } = require('chai');

// API Objects
const assurityAPI = require('../api/assurityPracticalTest_api');

Given(/^a user perform a GET call$/, async () => {
  this.response = await assurityAPI.getData();
});

When(/^the response return a statusCode of (\d+)$/, (statusCode) => {
  expect(this.response.statusCode).to.equal(statusCode);
});

Then(/^the response contains the name "([^"]*)?"$/, (nameValue) => {
  expect(this.response.body.Name).to.equal(nameValue);
});

When(/^the response proptery CanRelist is set to true$/, () => {
  expect(this.response.body.CanRelist).to.true;
});

When(/^the Promotions property contains an Item "([^"]*)?" with Description contains "([^"]*)?"$/, (itemName, description) => {
  const promotions = this.response.body.Promotions;
  for (let i = 0; i < promotions.length; i += 1) {
    if (promotions[i].Name === itemName) expect(promotions[i].Description).to.contains(description);
  }
});
