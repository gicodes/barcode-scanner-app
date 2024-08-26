import React, { useEffect, useRef, useState } from 'react';

const BarcodeScanner = () => {
  const [barcode, setBarcode] = useState('');
  const imageRef = useRef(null);

  useEffect(() => {
    // Check if BarcodeDetector is supported
    if (typeof window.BarcodeDetector === "undefined") {
      console.log("Barcode Detector is not supported by this browser.");
    } else {
      console.log("Barcode Detector supported!");

      const barcodeDetector = new window.BarcodeDetector({
        formats: ["code_39", "codabar", "ean_13"],
      });

      // Add onload event to ensure the image is fully loaded
      imageRef.current.onload = () => {
        barcodeDetector.detect(imageRef.current)
          .then((barcodes) => {
            if (barcodes.length > 0) {
              setBarcode(barcodes[0].rawValue);
            } else {
              setBarcode("No barcodes detected.");
            }
          })
          .catch((err) => {
            console.log("Barcode detection failed:", err);
            setBarcode(`Barcode detection failed: ${err.message}`);
          });
      };

      imageRef.current.onerror = (err) => {
        console.log("Image failed to load:", err);
      };
    }
  }, []);

  return (
    <div>
      <img
        ref={imageRef}
        src="/barcode-sample.jpg"  // Replace with the correct image path
        alt="Barcode Sample"
        style={{ maxWidth: '300px', margin: '20px 0' }}
      />
      <div>
        <strong>Detected Barcode:</strong> {barcode}
      </div>
    </div>
  );
};

export default BarcodeScanner;
