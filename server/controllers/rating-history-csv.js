const Model = require("../models/rating");
const Router = require("express").Router();
const fs = require("fs");
const Papa = require("papaparse");
const path = require("path");

/**
 * @swagger
 * tags:
 *   name: Ratings
 *   description: API endpoints for ratings
 */

/**
 * @swagger
 * /rating-history-csv:
 *   get:
 *     summary: Export ratings to CSV
 *     tags: [Ratings]
 *     responses:
 *       '200':
 *         description: Ratings exported successfully
 *       '500':
 *         description: Internal server error
 */
Router.get("/", async (req, res) => {
  try {
    const filePath = path.resolve(__dirname, "../ratings.csv");
    res.status(200).sendFile(filePath);
  } catch (error) {
    console.error("Error generating CSV:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = Router;
