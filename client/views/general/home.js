'use strict';

angular.module('myWeb')

.controller('HomeCtrl', ['$scope', function($scope) {
  $('.homeimage').mouseover(function () {
    $(this).attr("src", "/views/images/myfunnypic.png");
  })
  .mouseout(function () {
    $(this).attr("src", "/views/images/mynewpic.png");
  });
}]);
