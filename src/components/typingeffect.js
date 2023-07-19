import React, { useState, useEffect } from 'react';

const TypingEffect = ({ text, speed }) => {
  const [visibleText, setVisibleText] = useState('');
  
  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setVisibleText((prevText) => prevText + text[currentIndex]);
      currentIndex++;

      if (currentIndex === text.length-1) {
        clearInterval(intervalId);
      }
    }, speed);

    return () => {
      clearInterval(intervalId);
    };
  }, [text, speed]);

  return <span>{visibleText}</span>;
};

export default TypingEffect;
