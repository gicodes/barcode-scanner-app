const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 5001;

app.use(express.static(path.join(__dirname, '../frontend/build')));

app.use('/api/barcode', require('./routes/barcode'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
