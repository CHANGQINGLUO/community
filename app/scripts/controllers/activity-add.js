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
      //show popup info message
      $scope.showInfo = true;
      //set popup info active
      $('.popup-info').removeClass('popup-info-inactive');
      //set popup info active after 1 second
      setTimeout(function(){
        $('.popup-info').addClass('popup-info-inactive');
      },1000);

      $('.popup-info').html('发起成功');
  	}
  	$scope.addActivityPhoto = function(){
  		$('.activity-photo').addClass('activity-photo-active');
  	}
  	$scope.cancel = function(){
  		$('.activity-photo').removeClass('activity-photo-active');
  	}

  });
