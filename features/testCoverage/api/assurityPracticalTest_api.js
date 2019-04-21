const { createHeader } = require('../../support/utils/helpers');
const { requestService } = require('../../support/core/service_request');

const url = 'https://api.tmsandbox.co.nz/v1/Categories/6327/Details.json?catalogue=false';
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

// /**
//  *
//  * @param {object} body
//  * @returns {object} body
//  */
// const postAToDoItem = (body) => {
//   try {
//     return requestService.post(url, createHeader(), body);
//   } catch (error) {
//     console.log('error in postAToDoItem', error);
//     throw error;
//   }
// };

module.exports = {
  getData
};
