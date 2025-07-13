const express = require('express');
const router = express.Router();
const ClassSchedule = require('../models/ClassSchedule');

// Create a class schedule
router.post('/', async (req, res) => {
  try {
    const classSchedule = new ClassSchedule(req.body);
    await classSchedule.save();
    res.status(201).json(classSchedule);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all class schedules
router.get('/', async (req, res) => {
  try {
    const classSchedules = await ClassSchedule.find();
    res.status(200).json(classSchedules);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get class schedule by ID
router.get('/:id', async (req, res) => {
  try {
    const classSchedule = await ClassSchedule.findById(req.params.id);
    res.status(200).json(classSchedule);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update class schedule
router.put('/:id', async (req, res) => {
  try {
    const classSchedule = await ClassSchedule.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(classSchedule);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete class schedule
router.delete('/:id', async (req, res) => {
  try {
    await ClassSchedule.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Class schedule deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
