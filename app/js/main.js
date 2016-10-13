// Ionic Starter App
'use strict';
// Ionic dependency
require('ionic')

// lodash is my staple
window._ = require('lodash');

// Load configs
var generalConfig = require('../config/config');
var routeConfig = require('../config/route.config');

// Load modules
require('./nav/_module');
require('./home/_module');
require('./topic/_module');
require('./about/_module');
require('./templates/_module');

// Run Block
Run.$inject = ['$ionicPlatform'];

function Run($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
}

angular
  .module('app', [
    'ionic',
    'app.Nav',
    'app.Home',
    'app.About',
    'app.Topic',
    'templates'
  ])
  .run(Run)
  .config(routeConfig)
  .config(generalConfig);
