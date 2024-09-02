import React, { useEffect, useRef, useState } from 'react';

const BarcodeScanner = () => {
  const videoRef = useRef(null);
  const [scanning, setScanning] = useState(false);
  const streamRef = useRef(null); // To store the camera stream

  useEffect(() => {
    if (scanning) {
      // Access the webcam
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          streamRef.current = stream; // Store the stream in a ref
          videoRef.current.srcObject = stream;
          videoRef.current.play();

          // Set up an interval to capture frames periodically
          const captureInterval = setInterval(() => {
            captureFrame();
          }, 100); // Adjust the interval as needed

          return () => {
            clearInterval(captureInterval);
            if (streamRef.current) {
              // Stop all tracks of the stream when scanning stops
              streamRef.current.getTracks().forEach((track) => track.stop());
            }
          };
        })
        .catch((err) => console.error('Error accessing webcam: ', err));
    } else {
      // When scanning is stopped, stop the video stream
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
        streamRef.current = null; // Reset the stream ref
      }
    }
  }, [scanning]);

  const captureFrame = () => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const video = videoRef.current;
    
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    canvas.toBlob((blob) => {
      if (blob) { 
        const formData = new FormData();
        formData.append('frame', blob, 'frame.jpg');

        fetch('http://localhost:2020/process-frame', {
          method: 'POST',
          body: formData,
        })
          .then((response) => response.json())
          .then((data) => {
            console.log('Detected results:', data);
          })
          .catch((err) => console.error('Error sending frame to server: ', err));
      } else {
        console.error('Failed to convert canvas to Blob');
      }
    }, 'image/jpeg');
  };

  return (
    <div>
      <h2>Scan A Barcode</h2>
      <div className='scan-card'>
        <video ref={videoRef} autoPlay playsInline />
      </div>      
      <button 
        className='scan-btn'
        onClick={() => setScanning(!scanning)}
      >
        {scanning ? 'Stop Scanning' : 'Start Scanning'}
      </button>
    </div>
  );
};

export default BarcodeScanner;