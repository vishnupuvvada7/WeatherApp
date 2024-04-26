import React, { useState, useEffect } from 'react';
import './alert.css'; // Import your CSS file

const weatherAlerts = [
  {
    type: 'Tornado',
    icon: '️',
    animation: 'spinTornado',
    precautions: [
      'Seek shelter immediately in a basement or interior room away from windows.',
      'Do not go outside.',
    ],
  },
  {
    type: 'Hurricane',
    icon: '',
    animation: 'spinHurricane',
    precautions: [
      'Evacuate if instructed by officials.',
      'Board up windows and secure loose outdoor objects.',
      'Stock up on supplies like food, water, and medications.',
    ],
  },
  {
    type: 'Blizzard',
    icon: '❄️',
    animation: 'pulseBlizzard',
    precautions: [
      'Avoid travel unless absolutely necessary.',
      'Dress warmly in layers if you must go outside.',
      'Stay informed about road closures and weather updates.',
    ],
  },
  {
    type: 'Flash Flood',
    icon: '⚡️☔️',
    animation: 'flashFlood',
    precautions: [
      'Move to higher ground if possible.',
      'Do not drive through flooded roadways.',
      'Be aware of the risk of electrical hazards.',
    ],
  },
  {
    type: 'Extreme Heat',
    icon: '☀️',
    animation: 'pulseHeat',
    precautions: [
      'Stay hydrated and avoid strenuous activity during peak heat hours.',
      'Wear lightweight, loose-fitting clothing.',
      'Never leave children or pets unattended in a parked vehicle.',
    ],
  },
];

const Alerts = () => {
  const [activeAlert, setActiveAlert] = useState(null);

  useEffect(() => {
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      if (currentIndex >= weatherAlerts.length) {
        currentIndex = 0; // Reset index after showing all alerts
      }
      setActiveAlert(weatherAlerts[currentIndex]);
      currentIndex++;
    }, 3000); // Update every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="alert1-container">
      <h1 className="heading">Weather Alerts</h1>
      {activeAlert && (
        <div className="alert-container">
          <span className={`weather-icon ${activeAlert.animation}`}>{activeAlert.icon}</span>
          <div className="alert-details">
            <strong>{activeAlert.type} Warning</strong>
            <p>A {activeAlert.type.toLowerCase()} has been issued for your area. Please take necessary precautions:</p>
            <ul>
              {activeAlert.precautions &&
                activeAlert.precautions.map((precaution, index) => (
                  <li key={index}>{precaution}</li>
                ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Alerts;
