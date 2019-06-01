const { createHeader } = require('../../support/utils/helpers');
const { requestService } = require('../../support/core/service_request');

const url = 'https://bravenewcoin.com/system/api/content/pageInsight?skip=0&limit=30';
/**
 *
 * @returns {object} selected item
 */
const getData = () => {
  try {
    return requestService.get(url, createHeader());
  } catch (error) {
    console.log('error in Get Data ', error);
    throw error;
  }
};


module.exports = {
  getData
};
