'use strict';

(function(){

class PaymentComponent {
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

  BookSeats(){
     this.$http.post('/api/bookingendpoints',{
       MovieName:this.MovieName,
       Theatre:this.SelectedTheatre,
       City:this.City,
       Time:this.SelectedTime,
       SeatNo:this.SelectedSeat
     });
    console.log("clicked");
  }
}

angular.module('ticketHunterApp')
  .component('payment', {
    templateUrl: 'app/payment/payment.html',
    controller: PaymentComponent,
    controllerAs: 'paymentCtrl'
  });

})();
