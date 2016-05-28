'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('ActivityCtrl', function ($scope,$rootScope,$location) {

        $('#activityCarousel').hammer().on('swipeleft', function(){
              $(this).carousel('next');
           });
  	    $('#activityCarousel').hammer().on('swiperight', function(){
  	        $(this).carousel('prev');
  	     });

        $scope.currentActivityType = 'activity-type-0';

        $scope.changeActivityType = function(activityType){
          $scope.currentActivityType = activityType;
        }
        $scope.isActivityType = function(activityType){
          return $scope.currentActivityType == activityType;
        }
        


  });
