'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('ProductModifyCtrl', function ($scope,$rootScope,$location) {

  	$scope.removeProduct = function(){
  		//show popup info message
      $scope.showInfo = true;
      //set popup info active
      $('.popup-info').removeClass('popup-info-inactive');
      //set popup info active after 1 second
      setTimeout(function(){
        $('.popup-info').addClass('popup-info-inactive');
      },1000);

      $('.popup-info').html('下架成功');
  	}
    $scope.modifyProduct = function(){
      //show popup info message
      $scope.showInfo = true;
      //set popup info active
      $('.popup-info').removeClass('popup-info-inactive');
      //set popup info active after 1 second
      setTimeout(function(){
        $('.popup-info').addClass('popup-info-inactive');
      },1000);

      $('.popup-info').html('修改成功');
    }
  	$scope.addProductPhoto = function(){
  		$('.activity-photo').addClass('activity-photo-active');
  	}
  	$scope.cancel = function(){
  		$('.activity-photo').removeClass('activity-photo-active');
  	}


  });
