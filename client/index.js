'use strict';

angular.module('myWeb', ['ui.router', 'ngMessages'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {url:'/', templateUrl:'/views/general/home.html', controller: 'HomeCtrl'})
      .state('about', {url:'/about', templateUrl:'/views/general/about.html'})
      .state('portfolio', {url:'/portfolio', templateUrl:'/views/general/portfolio.html', controller: 'PortfolioCtrl'})
      .state('blog', {url:'/blog', templateUrl:'/views/general/blog.html'})
      .state('contact', {url:'/contact', templateUrl:'/views/general/contact.html'});
  }]);
