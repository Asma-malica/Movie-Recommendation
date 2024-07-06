const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: String,
  director: String,
  language: String,
  genre: String,
  year: Number,
  rating: Number,
  image: String,
});

module.exports = mongoose.model('Movie', movieSchema);
