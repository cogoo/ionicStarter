'use strict';

config.$inject = ['$ionicCloudProvider'];

function config($ionicCloudProvider) {
  $ionicCloudProvider.init({
    "core": {
      "app_id": "8d82af90"
    },
    "push": {
      "sender_id": "524132991722",
      "pluginConfig": {
        "ios": {
          "badge": true,
          "sound": true
        },
        "android": {
          "iconColor": "#343434"
        }
      }
    }
  });
}

module.exports = config;
