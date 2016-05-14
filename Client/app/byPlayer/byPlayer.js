angular.module('heatingUp.byPlayer', [])
.controller('byPlayer', function ($scope, $http) {

  $scope.getData = function(data){
    data = data.toUpperCase()
    if($scope.data.length === 15){
      return
    }
    for(var i = 0; i < $scope.data.length; i++){
      if($scope.data[i].name == data){
        return
      }
    }

    $http({
      method: 'POST',
      url: '/api/byPlayer',
      data: {playerName: data}
    }).then(function successCallback(res){
      console.log(res)
      $scope.data.push({name : data, player : res.data.playerHeadlineStats[0]})
      console.log($scope.data)
    }, function errorCallback(res){
      console.log(res)
    })
  }

  $scope.data = []
  $scope.input

});
