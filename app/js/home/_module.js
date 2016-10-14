'use strict';

require('@ionic_bundle')
var HomeComponent = require('./home.component');
var PushFactory = require('../factory/push.factory');

angular.module('app.Home', [])
  .config(config)
  .component('home', HomeComponent)
  .factory('pushFactory', PushFactory)

config.$inject = [
  '$stateProvider'
];

function config($stateProvider) {
  $stateProvider
    .state('nav.home', {
      url: '/home',
      views: {
        'nav-home': {
          template: '<ion-view view-title="Dashboard"><home></home></ion-view>'
        }
      }
    });
}
