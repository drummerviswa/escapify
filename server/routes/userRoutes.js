const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Create or update a user
router.post('/', async (req, res) => {
  try {
    const { username, email, password, theme } = req.body;
    const user = await User.findOneAndUpdate(
      { email },
      { username, password, theme },
      { new: true, upsert: true }
    );
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get user by email
router.get('/:email', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update theme
router.put('/:email/theme', async (req, res) => {
  try {
    const { theme } = req.body;
    const user = await User.findOneAndUpdate(
      { email: req.params.email },
      { theme },
      { new: true }
    );
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
