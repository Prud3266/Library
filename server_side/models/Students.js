const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  studentId: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  fingerprint: { type: Buffer, required: true },
});

module.exports = mongoose.model('Student', StudentSchema);
