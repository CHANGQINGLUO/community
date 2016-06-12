'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('LoginCtrl', function ($scope,$rootScope,$location) {

  		$scope.login = function(){
        $location.path('/my');
      }

  });
