'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('ActivityDetailsCtrl', function ($scope,$rootScope,$location,$http) {

  	$scope.activityJoined = false;
  	$scope.commentActive = false;
  	$scope.zanActive = false;

  	$scope.share = function(){
  		$('.share').addClass('share-active');
  	}
  	$scope.cancel = function(){
  		$('.share').removeClass('share-active');
  	}
  	$scope.comment = function(){
		$scope.commentActive = !$scope.commentActive;
  	}
  	$scope.zan = function(){
		$scope.zanActive = !$scope.zanActive;
  	}
  	$scope.commentSubmit = function(){
  		
  	}
  	$scope.join = function(){

  		if($scope.activityJoined){
  			//quit the activity
  			$scope.activityJoined = false;

  			$('.float-button > i').html('加入');

  			$('.popup-info').html('退出成功');

  		}else if(!$scope.activityJoined){
  			//quit the activity
  			$scope.activityJoined = true;

  			$('.float-button > i').html('退出');

  			$('.popup-info').html('加入成功');
  		}
  		//show popup info message
  		$scope.showInfo = true;
  		//set popup info active
  		$('.popup-info').removeClass('popup-info-inactive');
  		//set popup info active after 1 second
  		setTimeout(function(){
  			$('.popup-info').addClass('popup-info-inactive');
  		},1000);
  	}

    $http.get("/mock/activityDetails.json").then(function(response) {
            $scope.activityDetails = response.data;
            var participants = $scope.activityDetails.participants;
           
            for (var i = 0; i <= participants.length; i++) {
                
            };
                
            console.log($scope.activityDetails);
        }, function(response) {
            //Second function handles error
            console.log("Something went wrong - activityDetails");
        });

  });
