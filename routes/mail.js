var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  require('md-mailgun')( 'Excited User' , 'Wouhou Nice Mail', 'Crazy first mail from my app', function (statusCode) {
      if(statusCode === 200) {
         res.send('A mail has been send to administrator');
      } else {
         res.send('Sorry ... You are not authorize to send mail');
      }
  })
});

module.exports = router;
