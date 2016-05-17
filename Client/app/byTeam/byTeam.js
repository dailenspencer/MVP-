angular.module('heatingUp.byTeam', [])
.controller('byTeam', function ($scope, $http, dataState) {



  $scope.getData = function(){

    $http({
      method: 'GET',
      url: '/api/byTeam'
    }).then(function successCallback(res){
      dataState.teamData = res.data
      $scope.data = dataState.teamData
      console.log(res.data)
    }, function errorCallback(res){
      console.log(res)
    })
  }

  $scope.cons = function(){
    console.log("uh-oh")
  }

  $scope.searchTeam = function(team){
    console.log(team)

    for(var i = 0; i < dataState.teamState.length; i ++){
      if(dataState.teamState[i].teamName === team){
        return
      }
    }

    if(dataState.teamState.length === 15){
      return
    }

    if($scope.data[team]){
      $scope.rendered.push(dataState.teamData[team])

    }else{
      console.log("error")
    }
  }

  $scope.data = dataState.teamData
  $scope.rendered = dataState.teamState
  $scope.input
  console.log(dataState.teamData)

  if(!dataState.teamData){
    $scope.getData()
  }

});
