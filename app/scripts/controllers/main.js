'use strict';

/**
 * @ngdoc function
 * @name badgeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the badgeApp
 */
angular.module('badgeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })
  .controller('TabController', function(){
    this.tab = 1;

    this.setTab = function(newValue){
      this.tab = newValue;
    };

    this.isSet = function(tabName){
      return this.tab === tabName;
    };
  });
