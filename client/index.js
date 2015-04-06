'use strict';

angular.module('angular-prototype', ['ui.router', 'ngMessages'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {url:'/', templateUrl:'/views/general/home.html'})
      .state('about', {url:'/about', templateUrl:'/views/general/about.html'})
      .state('portfolio', {url:'/portfolio', templateUrl:'/views/general/portfolio.html'})
      .state('blog', {url:'/blog', templateUrl:'/views/general/blog.html'});
  }]);
