import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

const surahs = [
  { name: 'Sureh Yaseen', means:'heart of the Quran', path: '../surehyaseen' },
  { name: 'Sureh Mulk',means:'the kingdom', path: '../surehmulk' },
  { name: 'Sureh Juma',means:'The Friday', path: '../surehjuma' },
  { name: 'kul',means:'means', path: '../kul' },
  // You can add more surahs here
];

function Quran() {
  return (
    <div className="pb-4 bg-200">
      {/* Main container with gradient background */}
      <div className="min-h-[80vh] w-full flex justify-center flex-col items-center bg-gradient-to-t from-300 to-400 gap-4 p-4">
        
        {surahs.map((surah, index) => (
          
          <div
            key={index}
            className="w-full md:w-1/3 lg:w-1/4 h-[80px] hover:bg-200 shadow-xl cursor-pointer border-t border-b flex flex-col justify-center items-center"
          >
          <Link to={surah.path}>
            {/* Dynamic link and title */}
              <h1 className="text-white text-center">{surah.name}</h1>
              <h1 className="text-white text-center">{surah.means}</h1>
            </Link>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Quran;
