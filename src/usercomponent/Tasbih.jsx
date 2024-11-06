import React, { useState, useEffect } from 'react';
import Namaztasbih from './Namaztasbih';

function Tasbih() {
  const username = localStorage.getItem('username'); // Get the username from localStorage
  const storageKey = `tasbih_value_${username}`; // Unique key for each user's Tasbih value

  const [value, setValue] = useState(() => {
    const savedValue = localStorage.getItem(storageKey);
    return savedValue ? parseInt(savedValue, 10) : 0; // Retrieve the saved value for this user
  });

  useEffect(() => {
    if (username) {
      localStorage.setItem(storageKey, value); // Save the updated value with the user's specific key
    }
  }, [value, username, storageKey]);

  const clickHandler = () => {
    setValue((prevValue) => prevValue + 1); // Update the state
    console.log(value);
  };

  const clearHandler = () => {
    setValue(0); // Reset the Tasbih count to 0
  };

  return (
    <div>
      <div className="refresh text-red-600 mx-5 text-2xl cursor-pointer" onClick={clearHandler}>
        clear
      </div>
      <main className="flex items-center justify-center min-h-[67vh] cursor-pointer" onClick={clickHandler}>
        <div className="text-center text-8xl text-white underline ">{value}</div>
      </main>
    </div>
  );
}

export default Tasbih;
