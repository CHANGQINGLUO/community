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
      .when('/question-list', {
        templateUrl: 'views/question-list.html',
        controller: 'QuestionCtrl'
      })
      .when('/question-add', {
        templateUrl: 'views/question-add.html',
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
      .when('/product-modify', {
        templateUrl: 'views/product-modify.html',
        controller: 'ProductModifyCtrl'
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
      .when('/my-order-list', {
        templateUrl: 'views/my-order-list.html',
        controller: 'OrderCtrl'
      })
      .when('/my-order-details', {
        templateUrl: 'views/my-order-details.html',
        controller: 'OrderCtrl'
      })
      .when('/my-income-list', {
        templateUrl: 'views/my-income-list.html',
        controller: 'IncomeCtrl'
      })
      .when('/my-expense-list', {
        templateUrl: 'views/my-expense-list.html',
        controller: 'ExpenseCtrl'
      })
      .when('/my-point-list', {
        templateUrl: 'views/my-point-list.html',
        controller: 'PointCtrl'
      })
      .when('/my-info', {
        templateUrl: 'views/my-info.html',
        controller: 'MyInfoCtrl'
      })
      .when('/modify-info', {
        templateUrl: 'views/modify-info.html',
        controller: 'MyInfoCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl'
      })
      .when('/reset', {
        templateUrl: 'views/reset.html',
        controller: 'ResetCtrl'
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
