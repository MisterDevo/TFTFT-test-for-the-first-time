var assert = require('assert');

describe('TFTFT Unit Test', function() {

  describe('Covering routes/index', function () {
    var index = require('../routes/index');

  });

  describe('Covering routes/users', function () {
    var users = require('../routes/users');

    it('should return string by calling testFunc', function () {
      assert.equal(users.testFunc(), "TFTFT");
    });
  });
});
