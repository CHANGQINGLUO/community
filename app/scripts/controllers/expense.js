'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('ExpenseCtrl', function ($scope,$rootScope,$location) {

  		$scope.currentOrderType = 'order-type-0';

      $scope.changeOrderType = function(orderType){
        $scope.currentOrderType = orderType;
      }
      $scope.isOrderType = function(orderType){
        return $scope.currentOrderType == orderType;
      }

	  	$scope.answer = function(){
	  		$('#myModal').modal('hide');
	  	}

      $scope.sendProduct = function(){
      //show popup info message
        $scope.showInfo = true;
        //set popup info active
        $('.popup-info').removeClass('popup-info-inactive');
        //set popup info active after 1 second
        setTimeout(function(){
          $('.popup-info').addClass('popup-info-inactive');
        },1000);

        $('.popup-info').html('发货成功');
    }

  });
