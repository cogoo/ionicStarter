'use strict';

module.exports = {
  templateUrl: ('./app/topic/topic.template.html'),
  bindings: {},
  controller: TopicController
}

TopicController.$inject = [];

function TopicController() {
  var vm = angular.extend(this, {
    msg: 'this is the topic message'
  });

  return init();

  /**
   * This is the init method
   */
  function init() {
    // init code here
  }
}
