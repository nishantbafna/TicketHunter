'use strict';

angular.module('ticketHunterApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/addmovie', {
        template: '<addmovie></addmovie>'
      });
  });
