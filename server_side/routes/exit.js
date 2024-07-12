const express = require('express');
const router = express.Router();
const FingerprintScanner = require('../fingerprintScanner'); // Using the mock SDK
const Student = require('../models/Students');
const Log = require('../models/Logs');

router.post('/', async (req, res) => {
  const fingerprint = await FingerprintScanner.scanFingerprint();
  const studentId = await FingerprintScanner.verifyFingerprint(fingerprint);

  if (studentId) {
    const log = await Log.findOne({ studentId: studentId, exitTime: null });
    log.exitTime = new Date();
    await log.save();

    res.send({ message: 'Exit logged', studentId });
  } else {
    res.send({ message: 'Unrecognized fingerprint' });
    // Add code to alert staff
  }
});

module.exports = router;
