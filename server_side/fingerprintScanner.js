class FingerprintScanner {
    constructor() {
      this.enrolledFingerprints = new Map();
    }
  
    async scanFingerprint() {
      // Mock scan function, in real life, it would interact with the fingerprint scanner hardware
      return new Promise((resolve) => {
        setTimeout(() => {
          const mockFingerprint = 'sample-fingerprint-data'; // Replace with actual fingerprint data from scanner
          resolve(mockFingerprint);
        }, 1000);
      });
    }
  
    async enrollFingerprint(studentId, fingerprint) {
      this.enrolledFingerprints.set(studentId, fingerprint);
    }
  
    async verifyFingerprint(fingerprint) {
      for (let [studentId, enrolledFingerprint] of this.enrolledFingerprints.entries()) {
        if (enrolledFingerprint === fingerprint) {
          return studentId;
        }
      }
      return null;
    }
  }
  
  module.exports = new FingerprintScanner();
  