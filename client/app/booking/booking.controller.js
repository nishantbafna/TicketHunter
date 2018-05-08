'use strict';

(function(){

class BookingComponent {
  constructor($http,$scope) {
    this.message = 'Hello';
    var seats=[];
    this.$http=$http;
    this.$scope=$scope;
    this.Bookingdata=[];
    
    $(document).ready(function(){
      $('.seat').click(function(){

        $(this).toggleClass('seatselected');
        var seatno=$(this).attr('id');
       
        if ($.inArray(seatno, seats) > -1)
        {
          var a = seats.lastIndexOf(seatno);
          seats.splice(a, 1);
        }
        else{
          seats.push(seatno);
          $scope.SeatNumbers=seats;
        }
        
        console.log(seats);

        var price=seats.length;
        var totalPrice=150*price;
        $scope.TotalPrice=totalPrice;
        $('#seatNumbers').html(seats.sort()+'');
        $("#total").html(totalPrice);
        
        
      });
    });
   }

   $onInit() {
    this.MovieName=sessionStorage.getItem("MovieName");
    this.City=sessionStorage.getItem("City");
    this.SelectedTheatre=sessionStorage.getItem("SelectedTheatre");
    this.SelectedTime=sessionStorage.getItem("SelectedTime");
    console.log(this.MovieName);
    console.log(this.City);
    console.log(this.SelectedTheatre);
    console.log(this.SelectedTime);

    this.$http.get('api/movieendpoints/search/'+this.MovieName).then(response=>{
      this.MovieData=response.data;
      console.log(this.MovieData);
    });

     this.$http.get('/api/bookingendpoints').then(response => {
       this.Bookingdata=response.data;
       console.log(this.Bookingdata);
     });
    // $(document).ready(function(){
    //   $(this).toggleClass('seatbooked');
    //  });
   
  }


   SaveBooking(){
    this.SelectedSeat=this.$scope.SeatNumbers;
    sessionStorage.setItem('SelectedSeats',this.SelectedSeat);
    console.log(this.SelectedSeat);
    this.TotalPrice=this.$scope.TotalPrice;
    sessionStorage.setItem('TotalPrice',this.TotalPrice);
    console.log(this.TotalPrice);
     
   }
}

angular.module('ticketHunterApp')
  .component('booking', {
    templateUrl: 'app/booking/booking.html',
    controller: BookingComponent,
    controllerAs: 'bookingCtrl'
  });

})();
