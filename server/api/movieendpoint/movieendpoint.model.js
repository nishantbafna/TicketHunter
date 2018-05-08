'use strict';

import mongoose from 'mongoose';

var MovieendpointSchema = new mongoose.Schema({
  Poster:String,
  Title:String,
  Synopsis:String,
  Language:String,
  Genre: Array,
  Companies: Array,
  Duration: Number
});

export default mongoose.model('Movies', MovieendpointSchema);
