import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BASE_URL  from '../services/url';
import Nav from './Nav';
function Prayertime() {
  const [fetchtime, setfetchTime] = useState([]);

  const fetchtimes = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/namaztime`); // Ensure this URL matches your backend route
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
      <Nav/>
      {/* Prayer Times Section */}
      <div className="py-10 px-4 bg-gradient-to-t from-100 to-500 text-white">
        <h2 className="text-center text-lg sm:text-xl md:text-2xl font-semibold mb-8">Prayer Times</h2>
        <div className="w-full h-[80vh] flex flex-col items-center justify-center ">
          {fetchtime.length > 0 ? (
            <div className=" ">
              {fetchtime.map((ptime, index) => (
                <div
  key={index}
  className="flex justify-between w-full xsm:w-[300px]  p-4 rounded-lg shadow-md border border-gray-200 my-2"
>
  {/* Namaz Name on the Left */}
  <p className="font-semibold lg:text-2xl ">{ptime.namazName}</p>

  {/* Namaz Time on the Right */}
  <p className="text-white lg:text-2xl">{ptime.namaztime}</p>
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
