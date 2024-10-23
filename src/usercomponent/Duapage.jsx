import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import border1 from '../../public/border1.png';

function Dua() {
  const [duas, setDuas] = useState([]);

  const fetchDuas = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/duas'); // Ensure this URL matches your backend route
      setDuas(response.data);
      console.log('Fetched Duas:', response.data);
    } catch (error) {
      console.error('Error fetching Duas:', error);
      toast.error('Error fetching Duas');
    }
  };

  useEffect(() => {
    fetchDuas();
  }, []);

  return (
    <>
      {/* Navigation Bar */}
      <nav className='bg-darkblue py-3 px-3 text-white text-2xl flex justify-between items-center'>
        <h1 className='font-bold'>Tasbih</h1>
        <div className='w-10 h-10 rounded-full bg-100'></div>
      </nav>

      {/* Main Content */}
      <div className='w-full min-h-screen flex flex-col items-center justify-center bg-100'>
        <h1 className='text-2xl font-bold mb-5'>Dua</h1>

        {/* Cards Container */}
        <div className='flex flex-wrap  w-[90%] xsm:p-0  max-w-[1200px] h-full justify-center bg-white p-5'>
          {duas.map((dua, index) => (
            <div
              key={index}
              className='relative w-full xsm:h-[400px] sm:w-1/2 md:w-1/2   lg:w-1/2 h-[330px] overflow-hidden border border-darkblue shadow-black shadow-md rounded-xl p-1 m-2'
            >
              {/* Image */}
              <img
                className='rounded-xl w-full  h-full object-cover'
                src={border1}
                alt=""
              />
              
              {/* Text Overlay */}
              <div className='absolute top-0 left-0 px-10 xsm:px-1   w-full h-full text-center font-bold p-4  flex flex-col justify-center'>
                <h1 className='text-lg text-red-400 lg:py-2 xsm:py-1  sm:text-xl'>{dua.duaTitle}</h1>
                <h2 className='text-base text-green-600 px-6 lg:py-2  xsm:py-1 font-rubik sm:text-lg'>{dua.dua}</h2>
                <h3 className='text-sm px-7 text-blue-600 lg:py-2 xsm:py-1  sm:text-base'>{dua.duaDes}</h3>
                <h4 className='text-xs px-6 text-gray-500 lg:py-2 xsm:py-1  sm:text-sm'>{dua.tarjuma}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Toast Container for Notifications */}
      <ToastContainer />
    </>
  );
}

export default Dua;
