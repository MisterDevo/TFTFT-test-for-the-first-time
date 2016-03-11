![TFTFT Version](https://img.shields.io/badge/v-1.2.0-green.svg?style=flat-square) 
###### [![TFTFT-logo](https://raw.githubusercontent.com/MisterDevo/TFTFT/master/public/images/logo.png)](https://tftft.herokuapp.com) TFTFT BadgeFury : [![GitHub version](https://badge.fury.io/gh/misterdevo%2Ftftft.svg)](https://badge.fury.io/gh/misterdevo%2Ftftft)

###### TFTFT David-dm : [![Dependency Status](https://img.shields.io/david/misterdevo/TFTFT.svg)](https://david-dm.org/misterdevo/TFTFT)[![devDependency Status](http://img.shields.io/david/dev/misterdevo/TFTFT.svg)](http://david-dm.org/misterdevo/tftft#info=devDependencies)
---
**_Continuous Build and Deploy :_**
###### TFTFT Codeship : [![codeship](https://codeship.com/projects/b00bd7d0-9fa7-0133-a9c2-3206c6610001/status?branch=master)](https://codeship.com/projects/127941) => TFTFT Heroku : [![TFTFT Version](https://img.shields.io/badge/Demo-Heroku_App-746cac.svg?style=flat-square)](https://tftft.herokuapp.com/)
---
**_Continuous Dockerize and Publish :_**
###### TFTFT Shippable : [![Run Status](https://api.shippable.com/projects/56a61fc31895ca4474728105/badge?branch=master)](https://app.shippable.com/projects/56a61fc31895ca4474728105) => TFTFT Docker [![dockeri.co](http://dockeri.co/image/misterdevo/tftft)](https://hub.docker.com/r/misterdevo/tftft/)
---
**_Continuous Integration :_**
###### TFTFT Travis-ci : [![Travis](https://img.shields.io/travis/MisterDevo/TFTFT/master.svg)](https://travis-ci.org/MisterDevo/TFTFT/branches) => TFTFT Coveralls : [![Coverage Status](https://coveralls.io/repos/github/MisterDevo/TFTFT/badge.svg?branch=master)](https://coveralls.io/github/MisterDevo/TFTFT?branch=master)
###### => TFTFT SauceLabs : [![Sauce Test Status](https://saucelabs.com/browser-matrix/misterdevo.svg)](https://saucelabs.com/u/misterdevo)
---
###### TFTFT Waffle : [![Throughput Graph](https://graphs.waffle.io/MisterDevo/TFTFT/throughput.svg)](https://waffle.io/MisterDevo/TFTFT/metrics) [![Stories in Ready](https://badge.waffle.io/MisterDevo/TFTFT.png?label=ready&title=Ready)](https://waffle.io/MisterDevo/TFTFT) [![Stories in progress](https://badge.waffle.io/MisterDevo/TFTFT.png?label=in%20progress&title=in%20progress)](https://waffle.io/MisterDevo/TFTFT)
###### TFTFT IssueStats : [![Issue Stats](http://issuestats.com/github/misterdevo/tftft/badge/pr)](http://issuestats.com/github/misterdevo/tftft) [![Issue Stats](http://issuestats.com/github/misterdevo/tftft/badge/issue)](http://issuestats.com/github/misterdevo/tftft)
###### TFTFT Code-Climate : [![Code Climate](https://codeclimate.com/github/MisterDevo/TFTFT/badges/gpa.svg)](https://codeclimate.com/github/MisterDevo/TFTFT)
---
###### TFTFT BitHound : [![bitHound Dependencies](https://www.bithound.io/github/MisterDevo/TFTFT/badges/dependencies.svg)](https://www.bithound.io/github/MisterDevo/TFTFT/master/dependencies/npm)[![bitHound Code](https://www.bithound.io/github/MisterDevo/TFTFT/badges/code.svg)](https://www.bithound.io/github/MisterDevo/TFTFT)
###### TFTFT Gemnasium : [![Dependency Status](https://gemnasium.com/MisterDevo/TFTFT.svg)](https://gemnasium.com/MisterDevo/TFTFT)




# Test For the First Time ( TFTFT )  

## **Demo Backends : _This repo on the default master branch_**
Download it ! or Clone it ! or Fork it ! or ...  
Then Install it, Start it, Test it, Browse it, Containerize it ...
### TFTFT ExpressJs - TFTFT AngularJs :

##### `npm install`  
* **ExpressJs** dependencies
* **Test** reports (see above `npm run coverage` in npm `postinstall`)
* **Bower** dependencies :
  * `bower install`is called in npm `postinstall`  **AngularJs - RequireJs - BootstrapCss**
  * **bower-requirejs** is called in bower `postinstall` (_see .bowerrc_) to generate main requirejs file

##### `npm start`
Start **ExpressJs** server and listen to `http://localhost:3000` to serve api and static files.

### TFTFT BackTests :

##### `npm run coverage`  
**Istanbul** auto-instrumented coverage/report - **Mocha** runner with default config (`test/*.js`) for :
* TFTFT Unit Test : Mocha
* TFTFT Route Test : Supertest

_In this repo, `npm run coverage` runs at npm `postinstall` to create Istanbul and Mochawesome reports for app during installation.  
For this reason, all these tests dependencies (**Istanbul-Mocha-Supertest-Mochawesome**) are in production._

### TFTFT BackTests + EndToEnd :

##### `npm test`  
**Istanbul** auto-instrumented coverage/report - **Mocha** runner with config (`test/**/*.js test/*.js`)  
**Selenium-WebDriver** or **WebDriverIO** are ready to use in folder `test/spec/`(_first is preferred_)

**Selenium Server** : Local or Remote ? ... Up to Developer !  

Default to Remote with **Saucelabs** integrated with **TravisCI** for the needs of this repo.  
* **_Remote SauceLabs Selenium Server with SauceLabs user auth and Travis environnement:_**  
    Config in `test/spec/wdjs-opt.js` or `test/spec/wdio-opt.js`
    ```
    $ export SAUCE_USERNAME=[secure]
    $ export SAUCE_ACCESS_KEY=[secure]
    TRAVIS_JOB_NUMBER, TRAVIS_BUILD_NUMBER, _BROWSER, _PLATFORM, _VERSION must be define too
    ```

* **_Local Selenium Server :_**  
    In `test/spec/test-wdjs-spec.js`  or `test/spec/test-wdio-spec.js` :
    * Remove or comment the line : `options = require('./wdjs-opt.js');`  
    * Make your own config with : `var options = {};`  
    * Start your local selenium server  

    _Example with selenium-standalone (not include in this package) :_
    ```javascript
    npm install selenium-standalone;
    ./node_modules/.bin/selenium-standalone install;
    ./node_modules/.bin/selenium-standalone start;
    ```

## **Demo Frontends : _This repo on the gh-pages branch_**  
Source :     **https://github.com/MisterDevo/TFTFT/tree/gh-pages**

* TFTFT Gh-pages -> http://misterdevo.github.io/TFTFT  
* TFTFT WebGL -> http://misterdevo.github.io/TFTFT/webgl.html
