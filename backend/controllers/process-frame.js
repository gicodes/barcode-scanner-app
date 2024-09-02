const express = require('express');
const Jimp = require('jimp');

const app = express();

app.post('/process-frame', async (req, res) => {
  try {
    const imgBuffer = req.body; // image buffer from client
    const img = await Jimp.read(imgBuffer);

    const imageData = {
      width: img.bitmap.width,
      height: img.bitmap.height,
      data: img.bitmap.data,
    };

    dbr.decodeBufferAsync(
      imageData.data,
      imageData.width,
      imageData.height,
      imageData.width * 4, // assuming RGBA format
      dbr.barcodeTypes,
      (err, decodedResults) => {
        if (err) {
          console.error('Error decoding barcodes:', err);
          res.status(500).send('Error decoding barcodes');
        } else {
          res.json(decodedResults);
        }
      },
      "",
      1
    );
  } catch (err) {
    console.error('Error processing frame:', err);
    res.status(500).send('Error processing frame');
  }
});