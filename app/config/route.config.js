'use strict';

config.$inject = [
  '$urlRouterProvider'
];

function config($urlRouterProvider) {
  $urlRouterProvider.otherwise('/nav/home');
}

module.exports = config;
