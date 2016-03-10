var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  const https = require('https');
  var qs = require('querystring');

  var options = {
    hostname: 'api.mailgun.net',
    port: 443,
    path: '/v3/' + process.env.MAILGUN_DOMAIN + '/messages',
    method: 'POST',
    auth : 'api:key-' + process.env.MAILGUN_ACCESS_KEY,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  };

  var reqMail = https.request(options, (res) => {
    console.log('statusCode: ', res.statusCode);
    console.log('headers: ', res.headers);
    res.on('data', (d) => {
      process.stdout.write(d);
    });
  });

  reqMail.on('error', (e) => {
    console.log(`problem with request: ${e.message}`);
  });

  // write data to request body
  reqMail.write(qs.stringify({from:'Excited User <postmaster@' + process.env.MAILGUN_DOMAIN + '>',
                            to: 'MisterDevo <mister.devo@gmail.com>',
                            subject: 'Wouhou Nice Mail',
                            text: 'Crazy first mail from my app'}));
  reqMail.end();

  res.send('A mail has been send to administrator');
});

module.exports = router;
