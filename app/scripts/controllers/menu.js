'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('MenuCtrl', function ($scope,$rootScope,$location) {

      $scope.currentMenu = 'activity';
      $scope.isMenuSelected = function(menu){
          return $scope.currentMenu == menu;
      }
      $scope.selectMenu = function(menu){
          $scope.currentMenu = menu;
          $location.path('/'+menu);
      }
  });
