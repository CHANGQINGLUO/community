'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('ResetCtrl', function ($scope,$rootScope,$location) {

  	$scope.reset = function(){
        $location.path('/login');
    }

  });
