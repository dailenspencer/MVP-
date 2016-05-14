angular.module('heatingUp.byTeam', [])
.controller('byTeam', function ($scope, $http) {

  $scope.getData = function(){

    $http({
      method: 'GET',
      url: '/api/byTeam'
    }).then(function successCallback(res){
      $scope.data = res.data
      console.log(res.data)
    }, function errorCallback(res){
      console.log(res)
    })
  }

  $scope.searchTeam = function(team){

    for(var i = 0; i < $scope.rendered; i ++){
      if($scope.rendered[i].teamName === team){
        return
      }
    }

    if($scope.rendered.length === 15){
      return
    }

    if($scope.data[team]){
      $scope.rendered.push($scope.data[team])

    }else{
      console.log("error")
    }
  }

  $scope.data = {}
  $scope.rendered = []
  $scope.input

  $scope.getData()

});
