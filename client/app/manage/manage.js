'use strict';

angular.module('ticketHunterApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/manage', {
        template: '<manage></manage>'
      });
  });

