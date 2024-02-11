const Model = require("../models/rating");
const Router = require("express").Router();
const fs = require("fs");
const Papa = require("papaparse");

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
    let csvData = [];
    const data = await Model.find();
    data.forEach((item) => {
      csvData.push({
        username: item.username,
        rating:
          item.ratings[0].points[item.ratings[0].points.length - 1].rating,
      });
    });

    const csvString = Papa.unparse(csvData);
    fs.writeFileSync("ratings.csv", csvString);
    res.sendFile("ratings.csv");
    res.status(200).send("CSV file generated successfully.");
  } catch (error) {
    console.error("Error generating CSV:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = Router;
