const express = require('express');
const router = express.Router();
const FingerprintScanner = require('../fingerprintScanner'); // Using the mock SDK
const Student = require('../models/Students');

router.post('/', async (req, res) => {
  const { studentId, name } = req.body;
  const fingerprint = await FingerprintScanner.scanFingerprint();

  const student = new Student({ studentId, name, fingerprint });
  await student.save();

  await FingerprintScanner.enrollFingerprint(studentId, fingerprint);

  res.send({ message: 'Fingerprint enrolled successfully' });
});

module.exports = router;
