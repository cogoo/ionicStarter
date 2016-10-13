'use strict';

module.exports = {
  templateUrl: ('./app/home/home.template.html'),
  bindings: {},
  controller: HomeController
}

HomeController.$inject = ['$state'];

function HomeController($state) {
  var vm = angular.extend(this, {
    msg: 'this is the message',
    changeState: changeState
  });

  return init();

  /**
   * This is the init method
   */
  function init() {
    // init code here
  }

  function changeState() {
    $state.go('nav.topic');
  }
}
