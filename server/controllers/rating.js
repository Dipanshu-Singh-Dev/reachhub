const express = require("express");
const router = express.Router();
const Model = require("../models/rating");
router.get("/:username", async (req, res) => {
  const { username } = req.params;
  console.log(username)
  try {
    const ratings = await Model.findOne({ username });
    if (!ratings) {
      return res.status(404).json({ message: "Player not found" });
    }
    res.json(ratings);
  } catch (error) {
    console.error("Error fetching rating history:", error);
    res.status(500).json({ message: "Failed to fetch rating history" });
  }
});

module.exports = router;