import React, { useEffect, useState } from 'react';
import AddDua from '../Admincomponent/AddDua';
import ShowDua from './ShowDua';
import Namaztime from './Namaztime';
import Quotes from './Quotes';
import ShownTime from './ShownTime';
import ShowQuotes from './ShowQuotes';
import { useNavigate } from 'react-router-dom';

function Adminhome() {
  const navigate = useNavigate(); // Initialize the navigate function
  const [activeComponent, setActiveComponent] = useState('');

  const handleButtonClick = (component) => {
    setActiveComponent(component);
  };
  const username = localStorage.getItem('username')
  useEffect(() => {
    if (username !== 'Mohammed_7339') {
      navigate('/login'); // Navigate to /login if the username doesn't match
    }
  }, [username, navigate]); // Adding `username` and `navigate` to the dependency array


  return (
    <div className="w-full min-h-screen bg-gray-800 text-white flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Admin Page</h1>

      {/* Buttons section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-wrap justify-center gap-4 mb-4">
        <button
          onClick={() => handleButtonClick('AddDua')}
          className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded w-full md:w-auto"
        >
          Add Dua
        </button>
        <button
          onClick={() => handleButtonClick('Namaztime')}
          className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded w-full md:w-auto"
        >
          Namaz Time
        </button>
        <button
          onClick={() => handleButtonClick('Quotes')}
          className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded w-full md:w-auto"
        >
          Quotes
        </button>
        <button
          onClick={() => handleButtonClick('ShownTime')}
          className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded w-full md:w-auto"
        >
          Show Time
        </button>
        <button
          onClick={() => handleButtonClick('ShowQuotes')}
          className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded w-full md:w-auto"
        >
          Show Quotes
        </button>
        <button
          onClick={() => handleButtonClick('ShowDua')}
          className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded w-full md:w-auto"
        >
          Show Dua
        </button>
      </div>

      {/* Conditionally render components */}
      <div className="grid grid-cols-1 gap-6 w-full max-w-full sm:max-w-lg md:max-w-3xl lg:max-w-6xl">
        {activeComponent === 'AddDua' && (
          <div className="bg-gray-700 w-full rounded-lg shadow-md p-4">
            <AddDua />
          </div>
        )}
        {activeComponent === 'Namaztime' && (
          <div className="bg-gray-700 w-full rounded-lg shadow-md p-4">
            <Namaztime />
          </div>
        )}
        {activeComponent === 'Quotes' && (
          <div className="bg-gray-700 w-full rounded-lg shadow-md p-4">
            <Quotes />
          </div>
        )}
        {activeComponent === 'ShownTime' && (
          <div className="bg-gray-700 w-full rounded-lg shadow-md p-4">
            <ShownTime />
          </div>
        )}
        {activeComponent === 'ShowQuotes' && (
          <div className="bg-gray-700 w-full rounded-lg shadow-md p-4">
            <ShowQuotes />
          </div>
        )}
        {activeComponent === 'ShowDua' && (
          <div className="bg-gray-700 w-full rounded-lg shadow-md p-4">
            <ShowDua />
          </div>
        )}
      </div>
    </div>
  );
}

export default Adminhome;
