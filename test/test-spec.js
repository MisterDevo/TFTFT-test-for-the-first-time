var assert = require('assert');
var webdriverio = require('webdriverio');

var options = {
//  baseUrl:'http://localhost:3000'
};
options = require('./wdio-opt.js');

describe('TFTFT page', function() {

    this.timeout(60000);
    var client = {};

    before(function(done){
          client = webdriverio.remote(options).init().call(done);
    });
    
    describe('verif title', function() {
        
        it('should have the right title - the fancy generator way', function (done) {
            
            client
              .url('/')
              .getTitle().then(function(title){
                  assert.equal(title, 'TFTFT - Test For The First Time');
              })
              .call(done);
        });
    });


    after(function(done) {
        client.end().call(done);
    });
});
