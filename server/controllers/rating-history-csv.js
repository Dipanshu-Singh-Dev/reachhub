const Model = require('../models/rating');
const Router = require('express').Router();
const fs = require("fs");
const Papa = require("papaparse");

Router.get('/', async (req, res) => {
    let csvData = [];
    const data = await Model.find();
    data.forEach((item) => {
        csvData.push({
            username: item.username,
            rating: item.ratings[0].points[item.ratings[0].points.length - 1].rating
        })
    })

    const csvString = Papa.unparse(csvData);
    fs.writeFileSync("ratings.csv", csvString);
    console.log("CSV file generated successfully.");
})
module.exports = Router;