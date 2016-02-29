var assert = require('assert');

var request = require('supertest');


var users = require('../../routes/users');


describe('TFTFT Unit Test', function() {

  describe('Covering func in route/users for the moment', function () {

    it('should return string by calling testFunc', function () {
      assert.equal(users.testFunc(), "TFTFT");
    });
  });

});
