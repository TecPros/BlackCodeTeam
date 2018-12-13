angular.module('app').service('feedbacks', function($http, $window) {
    this.set = function(data, cb) {
  
      $http({
        method: 'POST',
        url: 'http://127.0.0.1:4000/user/addfeedback',
        contentType: "application/json",
        data: JSON.stringify(data)
      }).then(function successCallback(response) {
        cb(response)
      }, function errorCallback(response) {
        cb(response)
      });
    }
    this.getfeed = function (cb) {

      $http({
        method: 'GET',
        url: 'http://127.0.0.1:4000/user/feedbacks'
      }).then(function successCallback(response) {
        cb(response)
      }, function errorCallback(response) {
        cb(response)
      });
    }
  })
  


  