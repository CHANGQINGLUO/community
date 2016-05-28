'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('MainCtrl', function ($scope,$location) {
    $scope.next=function(){
    	$location.path('main2');
    }
    $scope.previous=function(){
    	$location.path('main');
    }
  });
