// ✅ File: routes/auth.js

import express from "express";
import jwt from "jsonwebtoken";
import User from "../models/User_model.js";

const router = express.Router();

// ✅ Login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user || !(await user.matchPassword(password))) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.json({ token, user: { name: user.name, email: user.email } });

  } catch (err) {
    console.error("❌ Login error:", err.message);
    res.status(500).json({ msg: "Server error", error: err.message });
  }
});

// ✅ Register route
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const exists = await User.findOne({ email });
    if (exists) {
      return res.status(400).json({ msg: "User already exists" });
    }

    const newUser = new User({ name, email, password });
    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(201).json({
      token,
      user: { name: newUser.name, email: newUser.email },
    });

  } catch (err) {
    console.error("❌ Register error:", err.message);
    res.status(500).json({ msg: "Server error", error: err.message });
  }
});

export default router;
