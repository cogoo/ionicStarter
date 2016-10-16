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
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3MDk2YmJiNi02ZDg5LTQ4MDgtODAxOS0zYzYyOGQ2Y2JhMTYifQ.b_u4RGY-wcXyt7442wnXsi8tQSSEP_kkGyGME-TTpDA',
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
