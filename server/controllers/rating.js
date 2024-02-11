const express = require("express");
const router = express.Router();
const Model = require("../models/rating");

/**
 * @swagger
 * tags:
 *   name: Ratings
 *   description: API endpoints for ratings
 */

/**
 * @swagger
 * /ratings/{username}:
 *   get:
 *     summary: Get rating history of a player
 *     tags: [Ratings]
 *     parameters:
 *       - in: path
 *         name: username
 *         required: true
 *         description: Username of the player
 *         schema:
 *           type: string
 *     security:
 *       - CookieAuth: []  # Require authentication
 *     responses:
 *       '200':
 *         description: Ratings fetched successfully
 *       '404':
 *         description: Player not found
 *       '500':
 *         description: Internal server error
 */

router.get("/:username", async (req, res) => {
  const { username } = req.params;
  console.log(username);
  try {
    const ratings = await Model.findOne({ username });
    if (!ratings) {
      return res.status(404).json({ message: "Player not found" });
    }
    res.status(200).send(ratings);
  } catch (error) {
    console.error("Error fetching rating history:", error);
    res.status(500).json({ message: "Failed to fetch rating history" });
  }
});

module.exports = router;
