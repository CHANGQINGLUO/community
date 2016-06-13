'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('ActivityCtrl', function ($scope,$rootScope,$location,$http) {

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
        
        /**
        ** get activity list data
        **/
        console.info("activityCtrl");
        $http.get("/mock/activity.json").then(function(response) {
          $scope.activityList = response.data;
            /**$scope.activityList = new Array(); 

            var data= response.data;
            angular.forEach(data, function(value, key){
                var activity = new ActivityEntity();
                activity.setStatus(data.status);
                activity.setCategory(data.category);
                activity.setSubCategory(data.subCategory);
                activity.setTimestamp(data.timestamp);
                activity.setCounts(data.counts);

                $scope.activityList.push(activity);

            });
            **/
            console.log($scope.activityList);
        }, function(response) {
            //Second function handles error
            console.log("Something went wrong - activity");
        });


        

       
  });
