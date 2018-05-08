'use strict';

angular.module('ticketHunterApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/moviesessions', {
        template: '<moviesessions></moviesessions>'
      });
  });
