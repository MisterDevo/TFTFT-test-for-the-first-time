![TFTFT-logo](https://raw.githubusercontent.com/MisterDevo/TFTFT/master/logo.png) [![dockeri.co](http://dockeri.co/image/misterdevo/tftft)](https://hub.docker.com/r/misterdevo/tftft/)
###### TFTFT BadgeFury : [![GitHub version](https://badge.fury.io/gh/misterdevo%2Ftftft.svg)](https://badge.fury.io/gh/misterdevo%2Ftftft)

###### TFTFT Codeship : [![codeship](https://codeship.com/projects/b00bd7d0-9fa7-0133-a9c2-3206c6610001/status?branch=master)](https://codeship.com/projects/127941) => TFTFT Heroku : [![TFTFT Version](https://img.shields.io/badge/Deployment-Heroku_App-746cac.svg?style=flat-square)](https://tftft.herokuapp.com/)

###### TFTFT Shippable : [![Shippable](https://api.shippable.com/projects/56a61fc31895ca4474728105/badge/master)](https://app.shippable.com/subscriptions/56a613901895ca4474727fd3) => TFTFT Docker

###### TFTFT Travis-ci : [![Travis](https://img.shields.io/travis/MisterDevo/TFTFT/master.svg)](https://travis-ci.org/MisterDevo/TFTFT/branches) => TFTFT Coveralls : [![Coverage Status](https://coveralls.io/repos/github/MisterDevo/TFTFT/badge.svg?branch=master)](https://coveralls.io/github/MisterDevo/TFTFT?branch=master)
###### => TFTFT SauceLabs : [![Sauce Test Status](https://saucelabs.com/browser-matrix/misterdevo.svg)](https://saucelabs.com/u/misterdevo)

###### TFTFT Waffle : [![Stories in Ready](https://badge.waffle.io/MisterDevo/TFTFT.png?label=ready&title=Ready)](https://waffle.io/MisterDevo/TFTFT) [![Stories in progress](https://badge.waffle.io/MisterDevo/TFTFT.png?label=in%20progress&title=in%20progress)](https://waffle.io/MisterDevo/TFTFT)[![Throughput Graph](https://graphs.waffle.io/MisterDevo/TFTFT/throughput.svg)](https://waffle.io/MisterDevo/TFTFT/metrics)

###### TFTFT David-dm : [![Dependency Status](https://img.shields.io/david/misterdevo/TFTFT.svg)](https://david-dm.org/misterdevo/TFTFT)[![devDependency Status](http://img.shields.io/david/dev/misterdevo/TFTFT.svg)](http://david-dm.org/misterdevo/tftft#info=devDependencies)

###### TFTFT BitHound : [![bitHound Dependencies](https://www.bithound.io/github/MisterDevo/TFTFT/badges/dependencies.svg)](https://www.bithound.io/github/MisterDevo/TFTFT/master/dependencies/npm)[![bitHound Code](https://www.bithound.io/github/MisterDevo/TFTFT/badges/code.svg)](https://www.bithound.io/github/MisterDevo/TFTFT)

###### TFTFT Code-Climate : [![Code Climate](https://codeclimate.com/github/MisterDevo/TFTFT/badges/gpa.svg)](https://codeclimate.com/github/MisterDevo/TFTFT)

###### TFTFT Gemnasium : [![Dependency Status](https://gemnasium.com/MisterDevo/TFTFT.svg)](https://gemnasium.com/MisterDevo/TFTFT)

###### TFTFT IssueStats : [![Issue Stats](http://issuestats.com/github/misterdevo/tftft/badge/pr)](http://issuestats.com/github/misterdevo/tftft) [![Issue Stats](http://issuestats.com/github/misterdevo/tftft/badge/issue)](http://issuestats.com/github/misterdevo/tftft)


# Test For the First Time ( TFTFT )  

### **Demo Backends :**  
#### TFTFT EndToEnd : Up to Developer !  


**_SauceLabs Selenium Server with user auth :_**  
Config in `test/wdio-opt.js`
```
$ export SAUCE_USERNAME=[secure]
$ export SAUCE_ACCESS_KEY=[secure]
```

**_Local Selenium Server with selenium-standalone :_**  
In `test/test-spec.js`  
* Remove or comment the line : `options = require('./wdio-opt.js');`  
* Make your own config with : `var options = {};`  
* Start your selenium server  
```javascript
npm install selenium-standalone;
./node_modules/.bin/selenium-standalone install;
./node_modules/.bin/selenium-standalone start;
```

### **Demo Frontends :**  
Source :     **https://github.com/MisterDevo/TFTFT/tree/gh-pages**

* TFTFT Gh-pages -> http://misterdevo.github.io/TFTFT  
* TFTFT WebGL -> http://misterdevo.github.io/TFTFT/webgl.html
