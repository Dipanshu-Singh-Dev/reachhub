const fs = require("fs");
const Papa = require("papaparse");
const path = require("path");
const Model = require("../models/rating"); // Import the Model

/**
 * Writes the data from the database to a CSV file
 */

module.exports = async () => {
  try {
    // Fetch data from the database
    const data = await Model.find();

    // Transform data to CSV format
    const csvData = data.map((item) => ({
      username: item.username,
      rating: item.ratings[0].points[item.ratings[0].points.length - 1].rating,
    }));

    // Convert data to CSV string
    const csvString = Papa.unparse(csvData);

    // Set the file path
    const filePath = path.resolve(__dirname, "../ratings.csv");

    // Write CSV string to file
    fs.writeFileSync(filePath, csvString);

    console.log("CSV file generated successfully.");
  } catch (error) {
    console.error("Error generating CSV:", error);
  }
};
