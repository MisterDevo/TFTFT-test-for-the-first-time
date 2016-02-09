var assert = require('assert');

describe('TFTFT page', function() {

    //it('should be a pending test');

    it('should have the right title - the fancy generator way', function () {
        browser.url('/');
        var title = browser.getTitle();
        assert.equal(title, 'TFTFT - Test For The First Time');
    });

});
