import React, { useState, useEffect } from 'react';

const TrafficLightSimulator = () => {
  const [activeLight, setActiveLight] = useState('red');

  useEffect(() => {
    const lightOrder = ['red', 'yellow', 'green'];
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % lightOrder.length;
      setActiveLight(lightOrder[currentIndex]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const lightStyle = (color) => ({
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    margin: '15px 0',
    backgroundColor: color,
    opacity: activeLight === color ? 1 : 0.3,
    boxShadow:
      activeLight === color
        ? `0 0 25px 10px ${color}`
        : 'none',
    transition: 'all 0.6s ease-in-out',
  });

  const containerStyle = {
    backgroundColor: '#333',
    padding: '30px',
    borderRadius: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '140px',
  };

  return (
    <div style={containerStyle}>
      <div style={lightStyle('red')}></div>
      <div style={lightStyle('yellow')}></div>
      <div style={lightStyle('green')}></div>
    </div>
  );
};

export default TrafficLightSimulator;
