const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  message: String,
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Review', reviewSchema);
