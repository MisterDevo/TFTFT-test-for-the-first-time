module.exports = {
        host: 'ondemand.saucelabs.com',
        port: 80,
        user: process.env.SAUCE_USERNAME,
        key: process.env.SAUCE_ACCESS_KEY,
        logLevel: 'silent',

        desiredCapabilities: {
            browserName: 'chrome',
            //browserName: 'firefox',
            version: '48.0',
            platform: 'Windows 10',
            tags: ['TFTFT Pages'],
            name: 'TFTFT',
            build: 'build-1.0.1',
            passed: 'true',

            'public': true
        }
    }
