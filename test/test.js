var assert = require('assert');
var users = require('../routes/users');

describe('Array', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });

    it('should return string by users call', function () {
      assert.equal(users.testFunc(), "TFTFT");
    });
  });
});
