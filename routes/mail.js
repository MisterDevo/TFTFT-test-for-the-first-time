var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  if(req.body.message) {
    require('md-mailgun')(
          req.body.email || 'Unknown User',
          'TFTFT Message',
          req.body.message,
          function (statusCode) {
              if(statusCode === 200) {
                 res.send('A mail has been send to administrator');
              } else {
                 res.send('Sorry ... You are not authorize to send mail');
              }
          })
  } else {
      res.status(500);
      res.end();
  }
});

module.exports = router;
