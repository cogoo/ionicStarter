'use strict';

module.exports = {
  templateUrl: ('./app/nav/nav.template.html'),
  bindings: {},
  controller: NavController
}

NavController.$inject = ['$scope'];

function NavController($scope) {

  $scope.$on('cloud:push:notification', function(event, data) {
    var msg = data.message;
    alert(msg.title + ': ' + msg.text);
    console.log('Push!!')
  });

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
