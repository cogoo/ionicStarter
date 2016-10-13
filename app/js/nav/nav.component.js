'use strict';

module.exports = {
  templateUrl: ('./app/nav/nav.template.html'),
  bindings: {},
  controller: NavController
}

NavController.$inject = [];

function NavController() {
  var vm = angular.extend(this, {

  });

  return init();

  /**
   * This is the init method
   */
  function init() {
    // init code here
  }
}
