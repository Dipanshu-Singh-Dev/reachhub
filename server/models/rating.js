const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema({
  ratings: [
    {
      name: String,
      points: [
        {
          year: Number,
          month: Number,
          day: Number,
          rating: Number,
        },
      ],
    },
  ],
  username: String,
});

const Rating = mongoose.model("rating", ratingSchema);

module.exports = Rating;
