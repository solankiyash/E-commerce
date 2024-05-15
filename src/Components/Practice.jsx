import React, { useState } from 'react';

function UploadProgressBar() {
  const [progress, setProgress] = useState(0);

  // Function to simulate data upload progress
  const uploadData = () => {
    // Simulate data upload progress
    const interval = setInterval(() => {
      setProgress(prevProgress => {
        // Increase progress by a random amount
        const newProgress = prevProgress + Math.random() * 10;
        // Limit progress to 100
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 500);

    // Simulate completion after 5 seconds
    setTimeout(() => {
      clearInterval(interval);
    }, 5000);
  };

  return (
    <div>
      <div style={{ width: '100%', height: '30px', backgroundColor: '#f0f0f0', marginBottom: '20px' }}>
        <div style={{ width: `${progress}%`, height: '100%', backgroundColor: '#4caf50' }}></div>
      </div>
      <button onClick={uploadData}>Start Upload</button>
    </div>
  );
}

export default UploadProgressBar;
