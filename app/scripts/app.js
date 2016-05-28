'use strict';

/**
 * @ngdoc overview
 * @name appApp
 * @description
 * # appApp
 *
 * Main module of the application.
 */
angular
  .module('appApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'hmTouchEvents'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/activity', {
        templateUrl: 'views/activity.html',
        controller: 'ActivityCtrl'
      })
      .when('/activity-details', {
        templateUrl: 'views/activity-details.html',
        controller: 'ActivityDetailsCtrl'
      })
      .when('/activity-add', {
        templateUrl: 'views/activity-add.html',
        controller: 'ActivityAddCtrl'
      })
      .when('/question', {
        templateUrl: 'views/question.html',
        controller: 'QuestionCtrl'
      })
      .when('/product-list', {
        templateUrl: 'views/product-list.html',
        controller: 'ProductListCtrl'
      })
      .when('/product-details', {
        templateUrl: 'views/product-details.html',
        controller: 'ProductDetailsCtrl'
      })
      .when('/product-add', {
        templateUrl: 'views/product-add.html',
        controller: 'ProductAddCtrl'
      })
      .when('/my', {
        templateUrl: 'views/my.html',
        controller: 'MyCtrl'
      })
      .when('/my-product-list-buy', {
        templateUrl: 'views/my-product-list-buy.html',
        controller: 'MyProductListCtrl'
      })
      .when('/my-product-list-sell', {
        templateUrl: 'views/my-product-list-sell.html',
        controller: 'MyProductListCtrl'
      })
      .otherwise({
        redirectTo: '/activity'
      });
  })
  .config(function($sceDelegateProvider){
    $sceDelegateProvider.resourceUrlWhitelist(['self','http://192.168.0.104:8082/mb-bg-ext-web/**','http://120.76.96.199:8080/mb-bg-ext-web/**','https://api.heweather.com/x3/weather/**']);
  })
  .run(function($rootScope,$location,$http){
      $rootScope.go = function(page){
        $location.path('/'+page);
      }
      $rootScope.showUtility = function(){
        $('.utility').addClass('utility-active');
      }
      $rootScope.hideUtility = function(){
        $('.utility').removeClass('utility-active');
      }
  });
