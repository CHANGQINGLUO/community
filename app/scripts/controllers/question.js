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

        $scope.changeQuestionType = function(questionType){
          $scope.currentQuestionType = questionType;
        }
        $scope.isQuestionType = function(questionType){
          return $scope.currentQuestionType == questionType;
        }

  });
