require('dotenv').config();
const express = require('express');
const dbr = require('barcode4nodejs');
const bodyParser = require('body-parser');

const DYNAMSOFT_LICENSE_KEY = process.env.DYNAMSOFT_LICENSE_KEY
dbr.initLicense(DYNAMSOFT_LICENSE_KEY);

const app = express();
const PORT = process?.env?.PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(bodyParser.raw({ type: 'image/jpeg', limit: '10mb' }));

app.listen(PORT, () => {
    console.log(`Express server is running at ${PORT}`);
  });
  