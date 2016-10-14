'use strict';

PushFactory.$inject = ['$http'];

function PushFactory($http) {
  var factory = {
    sendAll: sendAll
  };

  return factory;

  function sendAll() {
    var options = {
      method: 'POST',
      url: 'https://api.ionic.io/push/notifications',
      headers: {
        'Authorization': 'Bearer <insert bearer token>',
        'Content-Type': 'application/json'
      },
      data: {
        "notification": {
          "message": "Hello all, force push"
        },
        "profile": "development",
        "send_to_all": true,
        "tokens": "send_to_all"
      }
    };
    $http(options)
  }
}

module.exports = PushFactory;
