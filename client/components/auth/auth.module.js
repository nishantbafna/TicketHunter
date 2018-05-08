'use strict';

angular.module('ticketHunterApp.auth', ['ticketHunterApp.constants', 'ticketHunterApp.util',
    'ngCookies', 'ngRoute'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
