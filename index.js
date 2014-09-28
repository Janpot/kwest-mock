'use strict';

var Promise  = require('bluebird'),
    caseless = require('caseless'),
    kwest    = require('kwest'),
    through  = require('through');

function kwestify(response) {
  response.headers = response.headers || {};
  if (!response.data) {
    response.data = through();
    response.data.pause();
    response.data.end();
  }
  caseless.httpify(response, response.headers);
  return response;
}

function mock(mockKwest) {
  return kwest(null, function (request) {
    return mockKwest(request, function (mockResponse) {
      return Promise.resolve(mockResponse).then(kwestify);
    });
  });
}

module.exports = mock;
