'use strict';

import mongoose from 'mongoose';

var ShowtimingsSchema = new mongoose.Schema({
  Time:Array
});

export default mongoose.model('Showtimings', ShowtimingsSchema);
