angular.module("heatingUp",[])
.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state("state1", {
      url: "/"
      templateUrl: "login/login.html"
    })
    .state("")

})
