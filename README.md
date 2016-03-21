![TFTFT Version](https://img.shields.io/badge/v-1.2.0-green.svg?style=flat-square)

<p align="center">
 <a href="https://tftft.herokuapp.com" >
  <img alt="TFTFT" src="https://raw.githubusercontent.com/MisterDevo/TFTFT/master/public/images/logo.png">
 </a>
</p>

###### TFTFT BadgeFury : [![GitHub version](https://badge.fury.io/gh/misterdevo%2Ftftft.svg)](https://badge.fury.io/gh/misterdevo%2Ftftft)

###### TFTFT David-dm : [![Dependency Status](https://img.shields.io/david/misterdevo/TFTFT.svg)](https://david-dm.org/misterdevo/TFTFT)[![devDependency Status](http://img.shields.io/david/dev/misterdevo/TFTFT.svg)](http://david-dm.org/misterdevo/tftft#info=devDependencies)
---
**_Continuous Integration :_**
###### TFTFT Travis-ci : [![Travis](https://img.shields.io/travis/MisterDevo/TFTFT/master.svg)](https://travis-ci.org/MisterDevo/TFTFT/branches) => TFTFT Coveralls : [![Coverage Status](https://coveralls.io/repos/github/MisterDevo/TFTFT/badge.svg?branch=master)](https://coveralls.io/github/MisterDevo/TFTFT?branch=master)
###### => TFTFT SauceLabs : [![Sauce Test Status](https://saucelabs.com/browser-matrix/misterdevo.svg)](https://saucelabs.com/u/misterdevo)
---
**_Continuous Build and Deploy :_**
###### TFTFT Codeship : [![codeship](https://codeship.com/projects/b00bd7d0-9fa7-0133-a9c2-3206c6610001/status?branch=master)](https://codeship.com/projects/127941) => TFTFT Heroku : [![TFTFT Version](https://img.shields.io/badge/Demo-Heroku_App-746cac.svg?style=flat-square)](https://tftft.herokuapp.com/)
---
**_Continuous Dockerize and Publish :_**
###### TFTFT Shippable : [![Run Status](https://api.shippable.com/projects/56a61fc31895ca4474728105/badge?branch=master)](https://app.shippable.com/projects/56a61fc31895ca4474728105) => TFTFT Docker [![dockeri.co](http://dockeri.co/image/misterdevo/tftft)](https://hub.docker.com/r/misterdevo/tftft/)
---
###### TFTFT Waffle : [![Throughput Graph](https://graphs.waffle.io/MisterDevo/TFTFT/throughput.svg)](https://waffle.io/MisterDevo/TFTFT/metrics) [![Stories in Ready](https://badge.waffle.io/MisterDevo/TFTFT.png?label=ready&title=Ready)](https://waffle.io/MisterDevo/TFTFT) [![Stories in progress](https://badge.waffle.io/MisterDevo/TFTFT.png?label=in%20progress&title=in%20progress)](https://waffle.io/MisterDevo/TFTFT)
###### TFTFT IssueStats : [![Issue Stats](http://issuestats.com/github/misterdevo/tftft/badge/pr)](http://issuestats.com/github/misterdevo/tftft) [![Issue Stats](http://issuestats.com/github/misterdevo/tftft/badge/issue)](http://issuestats.com/github/misterdevo/tftft)
###### TFTFT Code-Climate : [![Code Climate](https://codeclimate.com/github/MisterDevo/TFTFT/badges/gpa.svg)](https://codeclimate.com/github/MisterDevo/TFTFT)
###### TFTFT Codacy : [![Codacy Badge](https://api.codacy.com/project/badge/grade/a5046941e5224dba9984a773d32f82bd)](https://www.codacy.com/app/mister-devo/TFTFT)
---
###### TFTFT BitHound : [![bitHound Dependencies](https://www.bithound.io/github/MisterDevo/TFTFT/badges/dependencies.svg)](https://www.bithound.io/github/MisterDevo/TFTFT/master/dependencies/npm)[![bitHound Code](https://www.bithound.io/github/MisterDevo/TFTFT/badges/code.svg)](https://www.bithound.io/github/MisterDevo/TFTFT)
###### TFTFT Gemnasium : [![Dependency Status](https://gemnasium.com/MisterDevo/TFTFT.svg)](https://gemnasium.com/MisterDevo/TFTFT)

# Test For the First Time ( TFTFT )  

_Run with NodeJs v4 or v5_  

Download it ! or Clone it ! or Fork it ! or ...  
Then Install it, Start it, Test it, Browse it, Containerize it ...

### TFTFT ExpressJs - TFTFT AngularJs :

##### `npm install`  
* **ExpressJs** dependencies : _body-parser - cookie-parser - debug - express - jade - morgan - serve-favicon_
* **Bower** dependencies : _bower - bower-requirejs_
  * **`bower install`** is called in `npm postinstall`  **AngularJs - RequireJs - BootstrapCss**
  * **`bower-requirejs`** is called in `bower postinstall` (_see .bowerrc_) to generate main requirejs file

##### `npm start`
Start **ExpressJs** server and listen to `http://localhost:3000` to serve api and static files.

### TFTFT Test :

##### `npm test`  
_**mocha** runner with config (`test/**/*.js`) - **Istanbul** auto-instrumented coverage/report_
* TFTFT Unit Test : **mocha**
* TFTFT Route Test : **supertest**
* TFTFT Test Reporter : **mochawesome**
* TFTFT Coverage Test Report : **istanbul**
* TFTFT Specification Test : **selenium-webdriver**  in folder 'test/spec/'  
* _Note for Specification Test :  
  **Selenium Server** : Local or Remote ? ... Up to Developer !  
  Default to Remote for the needs of this repo : **saucelabs** instrumented in tests with **TravisCI** configuration.  
  Travis will also send code coverage to **coveralls** after running tests._  


  For local or remote : In `test/spec/test-wdjs-spec.js` change `var isLocalSeleniumServer = false;`
     * _**Local Selenium Server :**_  
       * _Make your own config with :_  
       ```
         var option_local = {
                 server: 'http://127.0.0.1:4444/wd/hub',
                 desiredCapabilities: { browserName: 'firefox' },
                 baseUrl:'http://localhost:3000'
         };
       ```
       
       * _Start your local selenium server_  

        ```javascript
        /*Example with selenium-standalone (not include in this package)*/
        npm install selenium-standalone;
        ./node_modules/.bin/selenium-standalone install;
        ./node_modules/.bin/selenium-standalone start;
        ```


     * _**Remote SauceLabs Selenium Server with SauceLabs user auth and Travis environnement:**_  
        _Config in `test/spec/wdjs-opt.js` :_  

        ```
        $ export SAUCE_USERNAME=[secure]
        $ export SAUCE_ACCESS_KEY=[secure]
        TRAVIS_JOB_NUMBER, TRAVIS_BUILD_NUMBER, _BROWSER, _PLATFORM, _VERSION must be define too
        ```


### TFTFT Resources

_For app example  : Coverage reports + saucelabs matrix + test reports with mochawesome_

##### `npm run app-resources`  

**Istanbul** auto-instrumented coverage/report - **Mocha** runner with default config (`test/*.js`) for :
* TFTFT Mochawesome report 'one by one' in `public/report`
* TFTFT Istanbul Coverage Report in `public/cov`
* TFTFT Saucelabs matrix : download the last remote tests badge to `public/images/misterdevo.svg`
