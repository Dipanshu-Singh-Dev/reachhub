const mongoose = require("mongoose");
const playerSchema = new mongoose.Schema({
  id: String,
  username: String,
  perfs: {
    classical: {
      rating: Number,
      progress: Number,
    },
  },
  patron: Boolean,
});

const player = mongoose.model("player", playerSchema);

module.exports = player;
