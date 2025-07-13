const mongoose = require('mongoose');

const classScheduleSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  day: { type: String, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  totalHours: { type: Number, required: true },
});

module.exports = mongoose.model('ClassSchedule', classScheduleSchema);
