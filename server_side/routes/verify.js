const express = require('express');
const router = express.Router();
const FingerprintScanner = require('../fingerprintScanner'); // Using the mock SDK
const Student = require('../models/Students');
const Log = require('../models/Logs');

router.post('/', async (req, res) => {
  const fingerprint = await FingerprintScanner.scanFingerprint();
  const studentId = await FingerprintScanner.verifyFingerprint(fingerprint);

  if (studentId) {
    const student = await Student.findOne({ studentId });
    const log = new Log({ studentId: student.studentId, entryTime: new Date() });
    await log.save();

    res.send({ message: 'Access granted', studentId: student.studentId });
  } else {
    res.send({ message: 'Access denied' });
    // Add code to alert staff
  }
});

module.exports = router;
