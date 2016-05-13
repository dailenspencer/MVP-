angular.module("heatingUp",['ngRoute'])
.config(function($routeProvider){
  $routeProvider
    .when('/login',{
      templateUrl: 'app/login/login.html'
    })
})
