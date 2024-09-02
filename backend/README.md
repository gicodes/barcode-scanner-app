# Backend
**Scan-A-Barcode: /Backend**

    This directory contains the backend server built with Node.js for processing frames captured from the client's webcam to detect barcodes and QR codes.

## Prerequisites

- [Node.js](https://nodejs.org/)
- [Dynamsoft Barcode Reader SDK License](https://www.dynamsoft.com/barcode-reader/sdk-downloads/)
- [Jimp](https://www.npmjs.com/package/jimp) for image processing
- [Express](https://www.npmjs.com/package/express) for handling HTTP requests


## Installation

1. Install dependencies:
   `npm install`

2. Setup Environment Variables
    Create a .env file and add your Dynamsoft Barcode Reader SDK License:

    `DYNAMSOFT_LICENSE_KEY=your-license-key`


## Start Server
    
To start the backend server, run:
`node server.js`

The server will start on `http://localhost:2020`


## API EndPoints

- /process-frame: 
*(POST)* Accepts frame data from the frontend and returns detected barcodes or QR codes.


## License

    This project is licensed under the MIT License.

**Acknowledgements**
- Dynamsoft Barcode Reader SDK
- Jimp
- Express


### This documentation provide a clear and concise overview of your project, guiding users and developers on how to set up and run your application. 

### Written By Gideon Chino, I.
