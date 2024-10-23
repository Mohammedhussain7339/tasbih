import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Prayertime() {
  const [fetchtime, setfetchTime] = useState([]);

  const fetchtimes = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/namaztime'); // Ensure this URL matches your backend route
      setfetchTime(response.data);
      console.log('Fetched prayertime:', response.data);
    } catch (error) {
      console.error('Error fetching prayer times:', error);
    }
  };

  useEffect(() => {
    fetchtimes();
  }, []);

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="bg-darkblue py-3 px-3 text-white text-xl sm:text-2xl md:text-3xl flex justify-between items-center">
        <h1 className="font-bold">Tasbih</h1>
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-100">
          {/* Example Profile Icon */}
        </div>
      </nav>

      {/* Prayer Times Section */}
      <div className="py-10 px-4">
        <h2 className="text-center text-lg sm:text-xl md:text-2xl font-semibold mb-8">Prayer Times</h2>
        <div className="w-full h-[80vh] flex flex-col items-center justify-center ">
          {fetchtime.length > 0 ? (
            <div className=" ">
              {fetchtime.map((ptime, index) => (
                <div
  key={index}
  className="flex justify-between w-full xsm:w-[300px] bg-red-300 p-4 rounded-lg shadow-md border border-gray-200 my-2"
>
  {/* Namaz Name on the Left */}
  <p className="font-semibold lg:text-2xl ">{ptime.namazName}</p>

  {/* Namaz Time on the Right */}
  <p className="text-gray-600 lg:text-2xl">{ptime.namaztime}</p>
</div>
              ))}
            </div>
          ) : (
            <p>Loading prayer times...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Prayertime;
