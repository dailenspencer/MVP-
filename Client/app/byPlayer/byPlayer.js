angular.module('heatingUp.byPlayer', [])
.controller('byPlayer', function ($scope, $http) {

  $scope.getData = function(data){
    data = JSON.stringify(data)
    $http({
      method: 'POST',
      url: '/api/byPlayer',
      data: {test: 'test'}
    }).then(function successCallback(res){
      console.log(res)
    }, function errorCallback(res){
      console.log(res)
    })
  }

  $scope.data = {}
  $scope.input

});
