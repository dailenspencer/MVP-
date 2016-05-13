angular.module("heatingUp",['ngRoute'])
.config(function($routeProvider){
  $routeProvider
    .when('/',{
      templateUrl: 'app/login/login.html'
    })
    .when('#',{
      templateUrl: 'app/login/login.html'
    })
    .when('/byPlayer',{
      templateUrl: 'app/byPlayer/byPlayer.html'
    })
    .when('/byTeam',{
    	templateUrl: 'app/byTeam/byTeam.html'
    })
    .when('/byConference',{
    	templateUrl: 'app/byConference/byConference.html'
    }).
    otherwise({
    	templateUrl: 'app/login/login.html'
    })
})
