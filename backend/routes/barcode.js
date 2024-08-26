const express = require('express');
const router = express.Router();

router.post('/scan', (req, res) => {
  // Add your barcode processing logic here if needed
  res.json({ message: 'Barcode processing endpoint' });
});

module.exports = router;
