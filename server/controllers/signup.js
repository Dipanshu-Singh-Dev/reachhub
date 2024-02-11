const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Model = require("../models/user");

const router = express.Router();

router.post("/", async (req, res) => {
    console.log( req.body)
  try {
    // get details
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await Model.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    await Model.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({ message: "User created successfully, please login" });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
