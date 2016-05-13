

angular.module('heatingUp.byConf', [])
.controller('byConf', function ($scope, $http) {

  $scope.getData = function(){
    $http({
      method: 'GET',
      url: '/api/byConf'
    }).then(function successCallback(res){
      console.log(res)
    }, function errorCallback(res){
      console.log(res)
    })
  }

  $scope.data = {}

});
