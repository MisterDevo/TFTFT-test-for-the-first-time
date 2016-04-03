var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'TFTFT - Test For The First Time', version: require('../package.json').version });
});

router.get('/api/welcome', function(req, res, next) {
  res.json( [ {text:'Express Server App - Angular Client App'},
              {text:'Mocha Server Unit Test - Supertest Route Test'},
              {text:'Istanbul Coverage Instrumented'},
              {text:'Selenium-WebDriver End To End Browser Test'},
              {text:'Reports : Mochawesome - Istanbul - Saucelabs'},
              {text:'Send Me a mail with md-mailgun'}
            ]);
});

module.exports = router;
