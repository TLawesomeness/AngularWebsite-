'use strict';

angular.module('myWeb')

.controller('NavCtrl', ['$scope', function($scope) {

  $scope.contact = function() {
    $('#myModal').modal();
  };
}]);
