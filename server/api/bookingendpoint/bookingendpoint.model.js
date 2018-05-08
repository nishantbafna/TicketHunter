'use strict';

import mongoose from 'mongoose';

var BookingendpointSchema = new mongoose.Schema({
  MovieName:String,
  Theatre:String,
  City:String,
  Time:String,
  SeatNo: Array
});

export default mongoose.model('booking', BookingendpointSchema);
