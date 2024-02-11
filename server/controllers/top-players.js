const express = require("express");
const router = express.Router();
const model = require("../models/player");

/**
 * @swagger
 * tags:
 *   name: Players
 *   description: API endpoints for managing players
 */

/**
 * @swagger
 * /top-players:
 *   get:
 *     summary: Retrieve all players
 *     description: Returns a list of all players.
 *     tags: [Players]
 *     responses:
 *       '200':
 *         description: A list of players
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Player'
 *       '500':
 *         description: Internal server error
 */

router.get("/", async (req, res) => {
  try {
    const players = await model.find();
    res.status(200).send(players);
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Failed to fetch players" });
  }
});

module.exports = router;
