const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema({
  ratings: [
    {
      name: String,
      points: [[Number]], // Array of arrays of numbers
    },
  ],
  username: String,
});

const Rating = mongoose.model("Rating", ratingSchema);

module.exports = Rating;
