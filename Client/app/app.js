angular.module("heatingUp",
  ['ngRoute',
  'heatingUp.byConf',
  'heatingUp.byTeam',
  'heatingUp.byPlayer'])
.config(function($routeProvider){
  $routeProvider
    .when('/',{
      templateUrl: 'app/login/login.html'
    })
    .when('#',{
      templateUrl: 'app/login/login.html'
    })
    .when('/byPlayer',{
      templateUrl: 'app/byPlayer/byPlayer.html',
      controller: 'byPlayer'
    })
    .when('/byTeam',{
    	templateUrl: 'app/byTeam/byTeam.html',
      controller: 'byTeam'
    })
    .when('/byConference',{
    	templateUrl: 'app/byConference/byConference.html',
      controller: 'byConf'
    }).
    otherwise({
    	templateUrl: 'app/login/login.html'
    })
})
