module.exports = {
        host: 'ondemand.saucelabs.com',
        port: 80,
        user: process.env.SAUCE_USERNAME,
        key: process.env.SAUCE_ACCESS_KEY,
        logLevel: 'silent',

        baseUrl:'https://tftft-misterdevo.c9users.io',

        // ChromeBrowser: {
        //     desiredCapabilities: {
        //         browserName: 'chrome',
        //         version: '48.0',
        //         platform: 'Windows 10'
        //     }
        // },
        // FirefoxBrowser: {
        //     desiredCapabilities: {
        //         browserName: 'firefox',
        //         version: '44.0',
        //         platform: 'Windows 10'
        //     }
        // },
        //
        // desiredCapabilities: {
        //     browserName: 'chrome',
        //     version: '47.0',
        //     platform: 'OS X 10.11',
        //     tags: ['TFTFT Pages'],
        //     name: 'TFTFT',
        //     build: 'build-1.0.1',
        //     passed: 'true',
        //
        //     'public': true
        // }

        desiredCapabilities: {
            browserName: (process.env._BROWSER || '').replace(/_/g, ' '),
            platform: (process.env._PLATFORM || '').replace(/_/g, ' '),
            version: process.env._VERSION,

            tags: ['TFTFT', process.env._BROWSER, process.env._PLATFORM, process.env._VERSION],
            name: 'TFTFT',
            build: 'build-1.0.1',
            passed: 'false',

            'public': true
        }

    }
