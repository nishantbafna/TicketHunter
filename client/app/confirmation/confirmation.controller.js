'use strict';

(function(){

class ConfirmationComponent {
  constructor($http) {
    this.message = 'Hello';
    this.$http=$http;
  }

  $onInit() {
    this.MovieName=sessionStorage.getItem("MovieName");
    this.City=sessionStorage.getItem("City");
    this.SelectedTheatre=sessionStorage.getItem("SelectedTheatre");
    this.SelectedTime=sessionStorage.getItem("SelectedTime");
    this.SelectedSeat=sessionStorage.getItem("SelectedSeats");
    this.TotalPrice=sessionStorage.getItem("TotalPrice");
    console.log(this.MovieName);
    console.log(this.City);
    console.log(this.SelectedTheatre);
    console.log(this.SelectedTime);
    console.log(this.SelectedSeat);
    console.log(this.TotalPrice);
  }
}

angular.module('ticketHunterApp')
  .component('confirmation', {
    templateUrl: 'app/confirmation/confirmation.html',
    controller: ConfirmationComponent,
    controllerAs: 'confirmationCtrl'
  });

})();
