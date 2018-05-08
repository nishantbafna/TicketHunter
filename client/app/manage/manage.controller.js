'use strict';

(function(){

class ManageComponent {
  constructor($http,socket) {
    this.$http=$http;
    this.message = 'Hello';
    this.socket=socket;
    this.Theatre=[];
    this.Movies=[];
    this.CustomTheatre=[];
    this.PosterData = [];
    this.ShowTiminigs=[];
    this.ShowDates=[];

    }

  $onInit(){
    this.$http.get('/api/theatresendpoints').then(response=>{
      this.Theatre=response.data;
      this.socket.syncUpdates('theatresendpoint',this.Theatre);
      //console.log(this.Theatre);
    });

    this.$http.get('/api/movieendpoints').then(response=>{
      this.Movies=response.data;
      this.socket.syncUpdates('movieendpoint',this.Movies);
      //console.log(this.Movies);
    });

    this.$http.get('/api/mappedmovieendpoints').then(response=>{
      this.MappedMovies=response.data;
      this.socket.syncUpdates('mappedmovieendpoint',this.MappedMovies);
      console.log(this.MappedMovies);
    });
    
  }

    //get Theatre Deatils from DB according to City
    SearchTheatreName(){
      this.$http.get('/api/theatresendpoints/search/'+this.City).then(response=>{
        this.CustomTheatre=response.data;
        console.log(this.CustomTheatre);
      });

    //get Poster of the movie accorging to the Movie Selected
    this.$http.get('api/movieendpoints/search/'+this.MovieName).then(response=>{
      this.PosterData=response.data;
      // console.log("got");
    });

    }

  AddTheatre(){
    this.$http.post('/api/theatresendpoints',{
      TheatreName:this.TheatreName,
      Location: this.Location,
      City: this.City
    });
  }

  AddDate(){
    this.ShowDates.push(this.date+" "+this.month);
    console.log(this.ShowDates);
  }

  addTime(){
    this.ShowTiminigs.push(this.hour+":"+this.minute+" "+this.ampm);
    console.log(this.ShowTiminigs);  
  }

  

  // Haha(){
  //   console.log(this.SelectedTheatres);
  // }

  RemoveTheatre(Theatre){
    this.$http.delete('/api/theatresendpoints/'+Theatre._id);
    console.log("delete");
  }

  RemoveMappedMovie(MappedMovie){
    this.$http.delete('/api/mappedmovieendpoints/'+MappedMovie._id);
    console.log("delete");
  }

  SaveMapping(){ 
    this.$http.post('/api/mappedmovieendpoints',{
      Poster: this.PosterData[0].Poster,
      MovieName: this.MovieName,
      CityName: this.City,
      Theatres: this.SelectedTheatres,
      Dates: this.ShowDates,
      Timings:this.ShowTiminigs    
    });
    console.log(this.PosterData[0].Poster);
    console.log("Saved");
    this.ShowTiminigs=[];
    this.ShowDates=[];
  }


}

angular.module('ticketHunterApp')
  .component('manage', {
    templateUrl: 'app/manage/manage.html',
    controller: ManageComponent,
    controllerAs: 'manageCtrl'
  });
 
})();
