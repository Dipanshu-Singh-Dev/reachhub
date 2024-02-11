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
    console.log(data[0].ratings)
    const csvData = data.map((item) => {
      // console.log(item.ratings)
      return {
      username: item.username,
      rating: 1000,
    };});

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
