exports.options = {
        host: 'ondemand.saucelabs.com',
        port: 80,
        user: process.env.SAUCE_USERNAME,
        key: process.env.SAUCE_ACCESS_KEY,
        logLevel: 'silent',

        desiredCapabilities: {
            browserName: 'chrome',
            //browserName: 'firefox',
            version: '27',
            platform: 'XP',
            tags: ['TFTFT Pages'],
            name: 'TFTFT',
            build: 'build-1.0',
            passed: 'true',

            'public': true
        }
    }
