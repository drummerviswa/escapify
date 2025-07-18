const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  theme: { type: String, enum: ['light', 'dark'], default: 'light' },
  classesBunked: [
    {
      classId: { type: mongoose.Schema.Types.ObjectId, ref: 'ClassSchedule' },
      date: { type: Date, default: Date.now },
    },
  ],
});

module.exports = mongoose.model('User', userSchema);
