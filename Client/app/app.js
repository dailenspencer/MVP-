angular.module("heatingUp",
  ['ui.router',
  'heatingUp.byConf',
  'heatingUp.byTeam',
  'heatingUp.byPlayer'])
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('onApp',{
      url : "/",
      views: {
      'home': {
        templateUrl: 'app/login/login.html'
      },
      'byTeam': {
        templateUrl: 'app/byTeam/byTeam.html',
        controller: 'byTeam'
      },
      'byConf': {
        templateUrl: 'app/byConference/byConference.html',
        controller: 'byConf'
      },
      'byPlayer': {
        templateUrl: 'app/byPlayer/byPlayer.html',
        controller: 'byPlayer'
      }
      }
    })
    .state('byConf',{
      url : "/byConference",
      views: {
      'home': {
        templateUrl: 'app/login/login.html'
      },
      'byTeam': {
        templateUrl: 'app/byTeam/byTeam.html',
        controller: 'byTeam'
      },
      'byConf': {
        templateUrl: 'app/byConference/byConference.html',
        controller: 'byConf'
      },
      'byPlayer': {
        templateUrl: 'app/byPlayer/byPlayer.html',
        controller: 'byPlayer'
      }
      }
    })
    .state('byPlayer',{
      url : "/byPlayer",
      views: {
      'home': {
        templateUrl: 'app/login/login.html'
      },
      'byTeam': {
        templateUrl: 'app/byTeam/byTeam.html',
        controller: 'byTeam'
      },
      'byConf': {
        templateUrl: 'app/byConference/byConference.html',
        controller: 'byConf'
      },
      'byPlayer': {
        templateUrl: 'app/byPlayer/byPlayer.html',
        controller: 'byPlayer'
      }
      }
    })
    .state('byTeam',{
      url : "/byTeam",
      views: {
      'home': {
        templateUrl: 'app/login/login.html'
      },
      'byTeam': {
        templateUrl: 'app/byTeam/byTeam.html',
        controller: 'byTeam'
      },
      'byConf': {
        templateUrl: 'app/byConference/byConference.html',
        controller: 'byConf'
      },
      'byPlayer': {
        templateUrl: 'app/byPlayer/byPlayer.html',
        controller: 'byPlayer'
      }
      }
    })




  // $routeProvider
  //   .when('/',{
  //     templateUrl: 'app/login/login.html'
  //   })
  //   .when('#',{
  //     templateUrl: 'app/login/login.html'
  //   })
  //   .when('/byPlayer',{
  //     templateUrl: 'app/byPlayer/byPlayer.html',
  //     controller: 'byPlayer'
  //   })
  //   .when('/byTeam',{
  //   	templateUrl: 'app/byTeam/byTeam.html',
  //     controller: 'byTeam'
  //   })
  //   .when('/byConference',{
  //   	templateUrl: 'app/byConference/byConference.html',
  //     controller: 'byConf'
  //   }).
  //   otherwise({
  //   	templateUrl: 'app/login/login.html'
  //   })
})
.factory('dataState', function(){
  return {
    teamData: null,
    conferenceState: null,
    teamState: [],
    westernData: [],
    westernDataState: "unFetched",
    easternData:[],
    easternDataState: "unFetched",
    displayTeam: [],
    playerData: []
  }
})
