'use strict';

module.exports = {
  templateUrl: ('./app/home/home.template.html'),
  bindings: {},
  controller: HomeController
}

HomeController.$inject = ['$state', 'pushFactory'];

function HomeController($state, pushFactory) {
  var vm = angular.extend(this, {
    msg: 'this is the message',
    sendPush: sendPush
  });

  return init();

  /**
   * This is the init method
   */
  function init() {
    // init code here
  }

  function sendPush() {
    pushFactory
      .sendAll()
  }
}
