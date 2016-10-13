'use strict';

// var angular = require('angular');
require('ionic')
var TopicComponent = require('./topic.component');

angular.module('app.Topic', [])
  .config(config)
  .component('topic', TopicComponent)

config.$inject = [
  '$stateProvider'
];

function config($stateProvider) {
  $stateProvider
    .state('nav.topic', {
      url: '/topic',
      views: {
        'nav-home': {
          template: '<topic></topic>'
        }
      }
    });
}
