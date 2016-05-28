'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('ProductListCtrl', function ($scope,$rootScope,$location) {
  		
  		$('#productCarousel').hammer().on('swipeleft', function(){
              $(this).carousel('next');
           });
  	    $('#productCarousel').hammer().on('swiperight', function(){
  	        $(this).carousel('prev');
  	     });


  });
