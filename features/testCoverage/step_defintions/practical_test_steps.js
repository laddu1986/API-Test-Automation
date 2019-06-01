/* eslint-disable func-names */
/* eslint-disable no-unused-expressions */
// Project Dependencies
const { Given, When, Then } = require('cucumber');
const { expect } = require('chai');

// API Objects
const assurityAPI = require('../api/practicalTest_api');

Given(/^a user perform a GET call$/, async () => {
  this.response = await assurityAPI.getData();
});

When(/^the response return a statusCode of (\d+)$/, (statusCode) => {
  expect(this.response.statusCode).to.equal(statusCode);
});

Then(/^the total number of item return is equal to (\d+)$/, (size) => {
  expect(this.response.body.items.length).to.equal(size);
});

Then(/^each item has a fields object with a defined title$/, () => {
  const item = this.response.body.items;
  for (let i = 0; i < item.length; i += 1) {
    expect(item[i].fields.title).to.not.be.empty;
  }
});
