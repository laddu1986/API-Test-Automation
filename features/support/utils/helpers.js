/* eslint-disable no-param-reassign */
const { HEADER } = require('../constants/constants');


const createHeader = (header, value) => {
  const headers = [];
  if (header && value) {
    headers[header] = value;
  }

  headers[HEADER.CONTENT_TYPE] = 'application/json';
  console.log('%%%%%%%%%%  Headers in the response %%%%%%%%% ', headers);
  return headers;
};


module.exports = {
  createHeader
};
