module.exports = {
        host: 'ondemand.saucelabs.com',
        port: 80,
        user: process.env.SAUCE_USERNAME,
        key: process.env.SAUCE_ACCESS_KEY,
        logLevel: 'silent',

        ChromeBrowser: {
            desiredCapabilities: {
                browserName: 'chrome',
                version: '48.0',
                platform: 'Windows 10'
            }
        },
        FirefoxBrowser: {
            desiredCapabilities: {
                browserName: 'firefox',
                version: '44.0',
                platform: 'Windows 10'
            }
        },
        
        desiredCapabilities: {
            browserName: 'chrome',
            version: '47.0',
            platform: 'Linux',
            tags: ['TFTFT Pages'],
            name: 'TFTFT',
            build: 'build-1.0.1',
            passed: 'true',

            'public': true
        }
        
    }
