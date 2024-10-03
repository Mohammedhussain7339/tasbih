import React, { useState,useEffect } from 'react'
import Namaztasbih from './Namaztasbih';
function Tasbih() {
  const [value, setValue] = useState(() => {
    const savedValue = localStorage.getItem('value1');
    return savedValue ? parseInt(savedValue, 10) : 0;
  });
  useEffect(() => {
    localStorage.setItem('value1', value);
  }, [value]);

    const clickHandler=()=>{
        setValue(prevValue => prevValue + 1); // Properly update the state
        console.log(value)
    }
    const clearHandler=()=>{
        setValue(0)
    }
  return (
    <div>
    <div className="refresh text-red-600 mx-5 text-2xl cursor-pointer" onClick={clearHandler}>clear</div>
    <main className="flex items-center justify-center min-h-screen cursor-pointer"
    onClick={clickHandler}>
    <div className="text-center text-8xl text-white underline ">{value}</div>
    </main>

    </div>
  )
}

export default Tasbih
