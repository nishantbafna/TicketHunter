'use strict';

angular.module('ticketHunterApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/confirmation', {
        template: '<confirmation></confirmation>'
      });
  });
