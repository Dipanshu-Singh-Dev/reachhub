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
 * components:
 *   schemas:
 *     Player:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The unique identifier for the player.
 *         username:
 *           type: string
 *           description: The username of the player.
 *         perfs:
 *           type: object
 *           properties:
 *             classical:
 *               type: object
 *               properties:
 *                 rating:
 *                   type: integer
 *                   description: The classical rating of the player.
 *                 progress:
 *                   type: integer
 *                   description: The progress of the player.
 *           description: Performance statistics of the player.
 *         patron:
 *           type: boolean
 *           description: Indicates if the player is a patron or not.
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
