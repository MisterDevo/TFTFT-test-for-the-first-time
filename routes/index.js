var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'TFTFT - Test First Test First Test', version: require('../package.json').version });
});

router.get('/api/welcome', function(req, res, next) {
  res.json( [ {text:'Express Server App - Angular Client App'},
              {text:''},
              {text:'Mocha - Unit Test - Route Test Supertest - End To End Test Selenium-WebDriver'},
              {text:'Istanbul Coverage Instrumented Code'},
              {text:''},  
              {text:'Reports : Mocha doc reporter - Istanbul html reporter'},
              {text:'Multi-browser End To End Saucelabs matrix'},
              {text:'Send Me a mail with md-mailgun'}
            ]);
});

module.exports = router;
