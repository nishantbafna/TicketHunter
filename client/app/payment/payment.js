'use strict';

angular.module('ticketHunterApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/payment', {
        template: '<payment></payment>'
      });
  });
