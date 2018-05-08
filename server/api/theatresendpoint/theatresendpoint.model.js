'use strict';

import mongoose from 'mongoose';

var TheatresendpointSchema = new mongoose.Schema({
  TheatreName: String,
  Location: String,
  City: String
});

export default mongoose.model('theatres', TheatresendpointSchema);
