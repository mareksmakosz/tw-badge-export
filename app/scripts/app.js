'use strict';

/**
 * @ngdoc overview
 * @name badgeApp
 * @description
 * # badgeApp
 *
 * Main module of the application.
 */
angular
  .module('badgeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
