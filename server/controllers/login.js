const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Model = require("../models/user");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: User authentication operations
 */

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Authenticate user
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Login successful
 *       '401':
 *         description: Invalid credentials
 *       '404':
 *         description: User not found
 *       '500':
 *         description: Internal server error
 */
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

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.cookie("token", token, {
      expiresIn: "8h",
      secure: true,
      sameSite: "none",
      httpOnly: true,
    });

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
