const mongoose = require('mongoose');

const LogSchema = new mongoose.Schema({
  studentId: { type: Number, required: true },
  entryTime: { type: Date },
  exitTime: { type: Date },
});

module.exports = mongoose.model('Log', LogSchema);
