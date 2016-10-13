'use strict';

require('@ionic_bundle')
var AboutComponent = require('./about.component');

angular.module('app.About', [])
  .config(config)
  .component('about', AboutComponent)

config.$inject = [
  '$stateProvider'
];

function config($stateProvider) {
  $stateProvider
    .state('nav.about', {
      url: '/about',
      views: {
        'nav-about': {
          template: '<ion-view view-title="About"><about></about></ion-view>'
        }
      }
    });
}
