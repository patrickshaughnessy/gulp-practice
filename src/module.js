'use strict';

angular
.module('app', ['ui.router'])
.config(['$stateProvider', 'urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "partials/home.html"
    })
    .state('hello', {
      url: "/hello",
      template: "<h1>Hello World</h1>"
    })
}]);
