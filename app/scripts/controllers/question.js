'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('QuestionCtrl', function ($scope,$rootScope,$location) {

  		$scope.currentQuestionType = 'question-type-0';
  		$scope.isShowAnswer = false;

        $scope.changeQuestionType = function(questionType){
          $scope.currentQuestionType = questionType;
        }
        $scope.isQuestionType = function(questionType){
          return $scope.currentQuestionType == questionType;
        }

        $scope.addQuestionPhoto = function(){
  			$('.activity-photo').addClass('activity-photo-active');
  		}
  		$scope.cancel = function(){
  			$('.activity-photo').removeClass('activity-photo-active');
  		}
  		$scope.submitQuestion = function(){
	      //show popup info message
	      $scope.showInfo = true;
	      //set popup info active
	      $('.popup-info').removeClass('popup-info-inactive');
	      //set popup info active after 1 second
	      setTimeout(function(){
	        $('.popup-info').addClass('popup-info-inactive');
	      },1000);

	      $('.popup-info').html('提问成功');
	  	}
	  	$scope.showAnswer = function(){
	  		$scope.isShowAnswer = !$scope.isShowAnswer;
	  	}
	  	$scope.answer = function(){
	  		$('#myModal').modal('hide');
	  	}

  });
