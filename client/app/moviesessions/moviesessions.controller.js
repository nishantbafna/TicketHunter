'use strict';

(function(){

class MoviesessionsComponent {
  constructor($http) {
    this.message = 'Hello';
    this.$http=$http;
    this.CustomTheatre=[];
    this.MappedMovie=[]
  }

  $onInit(){
    this.MovieName=sessionStorage.getItem("MovieName");
    console.log(this.MovieName);
    this.City=sessionStorage.getItem("City");
    console.log(this.City);

    this.$http.get('api/movieendpoints/search/'+this.MovieName).then(response=>{
      this.MovieData=response.data;
      console.log(this.MovieData);
    });

    this.$http.get('/api/theatresendpoints/search/'+this.City).then(response=>{
      this.CustomTheatre=response.data;
      console.log(this.CustomTheatre);
    });

    this.$http.get('/api/mappedmovieendpoints/search/'+this.MovieName).then(response=>{
      this.MappedMovie=response.data;
      console.log(this.MappedMovie);
    });    
  }

  GotoSeatLayout(theatre,time){
    this.SelectedTheatre=theatre;
    this.SelectedTime=time;
    sessionStorage.setItem('SelectedTheatre',this.SelectedTheatre);
    sessionStorage.setItem('SelectedTime',this.SelectedTime);
    console.log(this.SelectedTheatre);
    console.log(this.SelectedTime);
  }


}

angular.module('ticketHunterApp')
  .component('moviesessions', {
    templateUrl: 'app/moviesessions/moviesessions.html',
    controller: MoviesessionsComponent,
    controllerAs: 'moviesessionsCtrl'
  });

})();
