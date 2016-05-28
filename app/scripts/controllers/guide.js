'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('GuideCtrl', function ($scope,$rootScope,$location) {

      $scope.start = function(){
      	$scope.closeGuide();
      }

      $scope.closeGuide = function(){
      	//$location.path('/main');
        $('.guide').css('width','0');
        $('.guide-start').remove();
      }

      $scope.appFirstTimeLaunch = function(){
      	return localStorage.appLaunched == null;
      }

      	  //bind the swipe left and right envent
      if($scope.appFirstTimeLaunch()){
          $('.guide').css('visibility','visible');

          $('#myCarousel').hammer().on('swipeleft', function(){
                $(this).carousel('next');
             });
    	    $('#myCarousel').hammer().on('swiperight', function(){
    	        $(this).carousel('prev');
    	     });
      }
  });
