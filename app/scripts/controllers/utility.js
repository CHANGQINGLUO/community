'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('UtilityCtrl', function ($scope,$rootScope,$location) {



  })  
  .config(function ($translateProvider) {      
    $translateProvider.useSanitizeValueStrategy(null);

    $translateProvider.useStaticFilesLoader({
      prefix: '/locale/lang_',
      suffix: '.json'
    });

    $translateProvider.preferredLanguage('ch');
  });
