'use strict';

// var angular = require('angular');
require('ionic')
var HomeComponent = require('./home.component');

angular.module('app.Home', [])
  .config(config)
  .component('home', HomeComponent)

config.$inject = [
  '$stateProvider'
];

function config($stateProvider) {
  $stateProvider
    .state('nav.home', {
      url: '/home',
      views: {
        'nav-home': {
          template: '<home></home>'
        }
      }
    });
}
