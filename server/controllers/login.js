const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Model = require("../models/user");

const router = express.Router();

// Login route
router.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Model.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    //get token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    //set token in cookies
    res.cookie("token", token, {expiresIn: '8h',secure:true,sameSite:'none'});

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
