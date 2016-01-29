var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'TFTFT - Test For The First Time' });
});

router.get('/api/welcome', function(req, res, next) {
  res.json( [ {text:'Express App'},
              {text:'Angular App'},
              {text:'Mocha Unit Test First'},
              {text:'Istanbul Coverage Test First'}
            ]);
});

module.exports = router;
