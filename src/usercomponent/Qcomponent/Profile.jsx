import React from 'react';

const VibrationButton = () => {
  const handleVibrate = () => {
    if (navigator.vibrate) {
      // Vibrate for 200 milliseconds
      navigator.vibrate(200);
    } else {
      console.log("Vibration is not supported on this device.");
    }
  };

  return (
    <div>
      <button onClick={handleVibrate}>Vibrate</button>
    </div>
  );
};

export default VibrationButton;
