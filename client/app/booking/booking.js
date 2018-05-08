'use strict';

angular.module('ticketHunterApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/booking', {
        template: '<booking></booking>'
      });
  });
