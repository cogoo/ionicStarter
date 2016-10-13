'use strict';

module.exports = {
  templateUrl: ('./app/about/about.template.html'),
  bindings: {},
  controller: AboutController
}

AboutController.$inject = [];

function AboutController() {
  var vm = angular.extend(this, {
    msg: 'this is the about message'
  });

  return init();

  /**
   * This is the init method
   */
  function init() {
    // init code here
  }
}
