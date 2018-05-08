'use strict';

(function(){

class AddmovieComponent {
  constructor($http,socket) {
    this.message = 'Hello';
    this.$http=$http;                 //to access data outside the constructor
    this.MovieData = [];
    this.socket=socket;
    this.Movies=[];
  }

  $onInit(){
    this.$http.get('/api/movieendpoints').then(response=>{
      this.Movies=response.data;
      this.socket.syncUpdates('movieendpoint',this.Movies);
      console.log(this.Movies);
    });
  }

  
  SearchMovie() {
    this.$http.get('https://api.themoviedb.org/3/search/movie?api_key=75a4c159096653d0ca3a1d6460c5869c&query=' + this.MovieName + '&year=' + this.Year).then(response => {
      var MovieID = response.data.results[0].id;
      this.$http.get('https://api.themoviedb.org/3/movie/' + MovieID + '?api_key=75a4c159096653d0ca3a1d6460c5869c').then(response => {
        this.MovieData = response.data;
        console.log(this.MovieData);

        // for(var i=0;i<this.MovieData.genres.length;i++){
        //   this.GenreArr=this.MovieData.genres[i].name;
        //   console.log(this.GenreArr);
        // }
          
      });
    });
  }

  RemoveMovie(Movie){
    this.$http.delete('/api/movieendpoints/'+Movie._id);
    console.log("delete");
  }

  SaveMovie(){
    this.$http.post('/api/movieendpoints',{
      Poster:this.MovieData.backdrop_path,
      Title:this.MovieData.title,
      Synopsis:this.MovieData.overview,
      Language:this.MovieData.original_language,
      Genre:this.MovieData.genres,
      Companies:this.MovieData.production_companies,
      Duration:this.MovieData.runtime
             //right hand name is the name of ng-model in html pages
    });
  }

}

angular.module('ticketHunterApp')
  .component('addmovie', {
    templateUrl: 'app/addmovie/addmovie.html',
    controller: AddmovieComponent,
    controllerAs: 'addmovieCtrl'
  });

})();
