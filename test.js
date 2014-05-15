var assert = require('power-assert')

describe = it = function(name, callback) {
  callback.displayName = name;
  callback();
};

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when not present', function() {
      assert.ok([1,2,3].indexOf(4) === -2); // wrong!
    });
  });
});

