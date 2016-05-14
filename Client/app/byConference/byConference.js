

angular.module('heatingUp.byConf', [])
.controller('byConf', function ($scope, $http) {

  $scope.getData = function(){

    $http({
      method: 'GET',
      url: '/api/byConf'
    }).then(function successCallback(res){
      $scope.data = res.data
      console.log("counting")
      for(var key in $scope.data){
        console.log(key)
        if(key === "Cleveland Cavaliers" ||
           key === "Toronto Raptors" ||
           key === "Miami Heat" ||
           key === "Atlanta Hawks" ||
           key === "Boston Celtics" ||
           key === "Charlotte Hornets" ||
           key === "Indiana Pacers" ||
           key === "Chicago Bulls" ||
           key === "Detroit Pistons" ||
           key === "Washington Wizards" ||
           key === "Orlando Magic" ||
           key === "Milwaukee Bucks" ||
           key === "New York Knicks" ||
           key === "Brooklyn Nets" ||
           key === "Philadelphia 76ers"
           ){
          $scope.eastern.push($scope.data[key])
        }
      }
      console.log($scope.eastern)
    }, function errorCallback(res){
      console.log(res)
    })
  }

  $scope.chooseConf = function(value){
    console.log(value)
    if(value == "Western"){

      $scope.current = $scope.western
    }
    if(value == "Eastern"){
      console.log("in east")
      $scope.current = $scope.eastern
    }
  }

  $scope.current;
  $scope.western = []
  $scope.eastern = []
  $scope.data = {}
  $scope.input

  $scope.getData()

});
