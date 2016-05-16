

angular.module('heatingUp.byConf', [])
.controller('byConf', function ($scope, $http, dataState) {
  
  $scope.input;
  $scope.current;

  $scope.getData = function(){

    $http({ 
      method: 'GET',
      url: '/api/byConf'
    }).then(function successCallback(res){
      dataState.teamData = res.data
      for(var key in dataState.teamData){
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
          dataState.easternData.push(dataState.teamData[key])
        }
      }
      dataState.easternDataState = "Fetched"
      for(var key in dataState.teamData){
        if(key === "Golden State Warriors" ||
           key === "San Antonio Spurs" ||
           key === "Oklahoma City Thunder" ||
           key === "Los Angeles Clippers" ||
           key === "Portland Trail Blazers" ||
           key === "Dallas Mavericks" ||
           key === "Memphis Grizzlies" ||
           key === "Houston Rockets" ||
           key === "Utah Jazz" ||
           key === "Sacramento Kings" ||
           key === "Denver Nuggets" ||
           key === "New Orleans Pelicans" ||
           key === "Minnesota Timberwolves" ||
           key === "Phoenix Suns" ||
           key === "Los Angeles Lakers" 
           ){
          dataState.westernData.push(dataState.teamData[key])
        }
      }
      dataState.westernDataState = "Fetched"
    }, function errorCallback(res){
      console.log(res)
    })
  }

  $scope.chooseConf = function(value){
    console.log($scope.current)
    if(value == "Western"){

      $scope.current = dataState.westernData
      dataState.conferenceState = "Western"
      console.log($scope.current)
    }
    if(value == "Eastern"){
      console.log("in east")
      $scope.current = dataState.easternData
      dataState.conferenceState = "Eastern"
    }
  }

  if(dataState.easternDataState === "unFetched"){
    $scope.getData()
  }

  if(dataState.conferenceState === "Eastern"){
    $scope.current = dataState.easternData
  }

  if(dataState.conferenceState === "Western"){
    $scope.current = dataState.westernData
  }

});
