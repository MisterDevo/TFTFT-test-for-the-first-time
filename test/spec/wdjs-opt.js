var SauceLabs = require("saucelabs");
var username = process.env.SAUCE_USERNAME,
    accessKey = process.env.SAUCE_ACCESS_KEY;

var saucelabs = new SauceLabs({
            username: username,
            password: accessKey
          });

module.exports = {
        server : "http://" + username + ":" + accessKey +
            "@ondemand.saucelabs.com:80/wd/hub",

        saucelabs: saucelabs,

        logLevel: 'silent',

        baseUrl:'https://tftft-misterdevo.c9users.io',

        desiredCapabilities: {
            browserName: (process.env._BROWSER || '').replace(/_/g, ' '),
            platform: (process.env._PLATFORM || '').replace(/_/g, ' '),
            version: process.env._VERSION,

            tags: [process.env.TRAVIS_JOB_NUMBER],
            name: 'TFTFT-' + process.env.TRAVIS_JOB_NUMBER,
            build: process.env.TRAVIS_BUILD_NUMBER,
            'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
            passed: 'false',

            'public': true
        }

    }
