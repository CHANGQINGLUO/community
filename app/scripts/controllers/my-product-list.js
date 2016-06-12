'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('MyProductListCtrl', function ($scope,$rootScope,$location) {
  		
  		$('#productCarousel').hammer().on('swipeleft', function(){
              $(this).carousel('next');
           });
  	    $('#productCarousel').hammer().on('swiperight', function(){
  	        $(this).carousel('prev');
  	     });
  	    $scope.receiveProduct = function(){
  	    	//show popup info message
	  		$scope.showInfo = true;
	  		//set popup info active
	  		$('.popup-info').removeClass('popup-info-inactive');
	  		//set popup info active after 1 second
	  		setTimeout(function(){
	  			$('.popup-info').addClass('popup-info-inactive');
	  		},1000);

	  		$('.popup-info').html('收货成功');
  	    }


  });
