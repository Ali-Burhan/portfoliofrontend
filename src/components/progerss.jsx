import React, { useState, useEffect } from 'react';
import './ProgressBar.css'; // CSS file for styling the progress bar

const ProgressBar = ({ progress, duration,bg }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setWidth((prevWidth) => {
        if (prevWidth >= progress) {
          clearInterval(timer);
        }
        return prevWidth + 1;
      });
    }, duration);

    return () => {
      clearInterval(timer);
    };
  }, [progress, duration]);

  return <div className="progress-bar-container">
    <div className="progress-bar" style={{ width: `${width}%`,backgroundColor:`${bg}`}}></div>
  </div>;
};

export default ProgressBar;
