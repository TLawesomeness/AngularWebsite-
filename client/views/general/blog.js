'use strict';

angular.module('myWeb')

.controller('BlogCtrl', ['$scope', function($scope) {
  $(".blogcontent").click(function() {
      if ($(this).hasClass("blogcontent")) {
          $(this).removeClass("blogcontent");
      }
      else {
          $(this).addClass("blogcontent");
      }
  });
}]);
