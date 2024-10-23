import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function NamazTasbih() {
  // Initialize value from localStorage or set to 0
  const [value, setValue] = useState(() => {
    const savedValue = localStorage.getItem('value');
    return savedValue ? parseInt(savedValue, 10) : 0;
  });
  useEffect(() => {
    // Show alert when the third range reaches 100
    if (value === 100) {
      toast.success(<strong>ما شاء الله!</strong>);
      setValue(0)
    }
  }, [value]);

  // Update localStorage whenever value changes
  useEffect(() => {
    localStorage.setItem('value', value);
  }, [value]);

  const clickHandler = () => {
    setValue((prevValue) => prevValue + 1);
  };

  const clearValue = () => {
    setValue(0);
    localStorage.setItem('value', 0); // Clear localStorage
  };
  const handleInputChange = (e) => {
    setValue(Number(e.target.value));
  };

  return (
    <div className='w-full text-center py-40 cursor-pointer'onClick={clickHandler}>
      {/* Tasbih click handler */}
      <div  className=''>
      {/* First range (0 to 33) */}
      <input 
        type="range" 
        min="0" 
        max="33" 
        value={value <= 33 ? value : 33} 
        readOnly 
      />
      <br />

      {/* Second range (33 to 66) */}
      <input 
        type="range" 
        min="0" 
        max="33" 
        value={value > 33 && value <= 66 ? value - 33 : value > 66 ? 33 : 0} 
        readOnly 
      />
      <br />

      {/* Third range (66 to 100) */}
      <input 
        type="range" 
        min="0" 
        max="34" 
        value={value > 66 ? value - 66 : 0} 
        readOnly 
      />      <br />

            <input 
        type="range" 
        min="0" 
        max="100" 
        value={value} 
        onChange={handleInputChange} 
      />


      </div>
      
      {/* Display current value */}
      <div className='text-8xl text-white'>{value}</div>
      
      {/* Clear button to reset value */}
      <button onClick={clearValue} className="mt-10 px-4 py-2 bg-red-500 text-white rounded">
        Clear
      </button>
      <ToastContainer />
    </div>
  );
}

export default NamazTasbih;
