const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists." });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new user
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // Respond with success
    res.status(201).json({ message: "User created successfully!", user: newUser });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // 1. Check if the user exists in the database by email
    const user = await User.findOne({ where: { email } });

    if (!user) {
      // 2. If user doesn't exist, send 404
      return res.status(404).json({ message: "User not found" });
    }

    // 3. Compare the password with the stored hashed password
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (isPasswordMatch) {
      // 4. If passwords match, send success response with a message
      return res.status(200).json({
        message: "User login successful",
        name: user.name,  // Returning the user's name on successful login
      });
    } else {
      // 5. If passwords don't match, send 401 Unauthorized
      return res.status(401).json({ message: "Invalid password" });
    }
  } catch (error) {
    // Handle unexpected errors
    console.error("Login error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});


module.exports = router;
