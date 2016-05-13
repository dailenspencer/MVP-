angular.module('heatingUp.byTeam', [])
.controller('byTeam', function ($scope, $http) {

  $scope.getData = function(){
    $http({
      method: 'GET',
      url: '/api/byTeam'
    }).then(function successCallback(res){
      console.log(res)
    }, function errorCallback(res){
      console.log(res)
    })
  }

  $scope.data = {}

});
