import React from 'react';

const VibrationButton = () => {
    const handleClick = () => {
        // Check if vibration is supported
        if (navigator.vibrate) {
            navigator.vibrate(200); // Vibrate for 200 milliseconds
        } else {
            console.log("Vibration is not supported on this device.");
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Vibration Test</h1>
            <button onClick={handleClick} style={{ padding: '10px 20px', fontSize: '16px' }}>
                Click to Vibrate
            </button>
        </div>
    );
};

export default VibrationButton;
