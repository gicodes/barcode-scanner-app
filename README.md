# Barcode-Scanner-App
**Real-Time Barcode and QR Code Scanner**

    This is a full-stack web application that allows users to scan barcodes and QR codes in real-time using their webcam. 
    The application is built with a Node.js backend and a React frontend, utilizing the `barcode4nodejs` package for server-side barcode scanning.

## Features
- Real-time barcode and QR code scanning via webcam
- Cross-platform compatibility for both desktop and web
- Efficient processing with server-side support for high-performance scanning


## Project Structure

    Root/ 
        ├── backend/
            └── README.md # Backend-specific README │
            └── server.js # Main server file 
            ├── controllers/ 
                └── process-frame.js # Frame processing logic  
                
        ├── frontend/
            ├── src/ 
            │ └── React App  


## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Dynamsoft Barcode Reader SDK License](https://www.dynamsoft.com/barcode-reader/sdk-downloads/)
- [npm](https://www.npmjs.com/) package manager


### Installation

1. Clone Repository:
   `git clone https://github.com/gicodes/Scan-A-Barcode.git && cd Scan-A-Barcode`

2. Install Dependencies
    **Backend**
        `cd backend && npm install`
    
    **Frontend**
        `cd frontend && npm install`

3. Run Application
    1. Start the Backend Server
        `cd backend && node server.js`
    
    2. Start the Frontend App
        `cd frontend && npm start`

    3. Open your web browser and go to `http://localhost:3000`


### License

    This project is licensed under the MIT License.

**Acknowledgements**
- Dynamsoft Barcode Reader SDK
- Node.js
- React
- Gicodes (https://github.com/gicodes)
