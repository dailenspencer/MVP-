angular.module('heatingUp.byPlayer', [])
.controller('byPlayer', function ($scope, $http, dataState) {

  $scope.getData = function(data){

    console.log("working?")
    data = data.toUpperCase()
    if(dataState.playerData.length === 15){
      return
    }
    console.log(dataState.playerData)
    for(var i = 0; i < dataState.playerData.length; i++){
      if(dataState.playerData[i].name == data){
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

  $scope.data = dataState.playerData
  $scope.input

});
