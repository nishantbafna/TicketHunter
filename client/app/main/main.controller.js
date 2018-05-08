'use strict';

(function() {

  class MainController {

    constructor($http, $scope, socket) {
      this.$http = $http;
      this.socket = socket;
      this.MappedMovies = [];
      this.SelectedMovie=[];

    
    }

    $onInit() {
      this.$http.get('/api/mappedmovieendpoints').then(response => {
          this.MappedMovies = response.data;
          this.MappedMovies.reverse();
          this.socket.syncUpdates('thing', this.MappedMovies);
          console.log(this.MappedMovies);
        });
    }

    book(moviename){
      this.SelectedMovie=moviename.MovieName;
      console.log(this.SelectedMovie);
      this.$http.get('/api/mappedmovieendpoints/search/'+this.SelectedMovie).then(response=>{
        this.Selection=response.data;
        console.log(this.Selection);
        sessionStorage.setItem('MovieName',this.SelectedMovie);
      });
    }

    moviesessions(){
      this.City=this.SelectedCity;
      sessionStorage.setItem('City',this.City);
      console.log(this.City);
      
    }

  

  }

  angular.module('ticketHunterApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController,
      controllerAs: 'mainCtrl'
    });
})();
