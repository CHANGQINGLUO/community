'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('MyInfoCtrl', function ($scope,$rootScope,$location) {
  		$scope.modifyinfo = function(){
  			$location.path("/my-info");
  		}
  		

  });
