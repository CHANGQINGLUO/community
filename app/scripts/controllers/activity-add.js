'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('ActivityAddCtrl', function ($scope,$rootScope,$location) {

  	$scope.submitActivity = function(){
  		$location.path('/activity');
  	}
  	$scope.addActivityPhoto = function(){
  		$('.activity-photo').addClass('activity-photo-active');
  	}
  	$scope.cancel = function(){
  		$('.activity-photo').removeClass('activity-photo-active');
  	}

  });
