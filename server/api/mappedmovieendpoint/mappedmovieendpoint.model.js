'use strict';

import mongoose from 'mongoose';

var MappedmovieendpointSchema = new mongoose.Schema({
  Poster:String,
  MovieName: String,
  CityName: String,
  Theatres: Array,
  Dates: Array,
  Timings:Array
});

export default mongoose.model('MappedMovie', MappedmovieendpointSchema);
