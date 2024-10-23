import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to toggle the menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      // Scroll to the top of the page when the menu is opened
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className='w-full shadow-2xl py-4 bg-200 flex items-center justify-between px-4 md:px-10'>
      {/* Logo or Site Name */}
      <div className='text-white text-xl font-bold' >
        <Link to="/">Tasbih</Link>
      </div>

      {/* Hamburger Menu Icon */}
      <div className='md:hidden'>
        <button onClick={toggleMenu} className='text-white focus:outline-none'>
          {/* Hamburger icon */}
          {isOpen ? (
            <svg className='w-6 h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
            </svg>
          ) : (
            <svg className='w-6 h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16m-7 6h7' />
            </svg>
          )}
        </button>
      </div>

      {/* Navigation Links */}
      <ul className={`flex-col md:flex md:flex-row ${isOpen ? 'flex' : 'hidden'} md:visible absolute md:static bg-200 md:bg-transparent w-full md:w-auto top-16 md:top-auto left-0 md:left-auto md:space-x-6 p-4 md:p-0`}>
        <li className='py-2 md:py-0 text-white'><Link to='/duapage'>Dua</Link></li>
        <li className='py-2 md:py-0 text-white'><Link to='/'>Home</Link></li>
        <li className='py-2 md:py-0 text-white'><Link to='/prayertime'>Prayer Time</Link></li>
        <li className='py-2 md:py-0 text-white'><Link to='/quran'>Quran</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
