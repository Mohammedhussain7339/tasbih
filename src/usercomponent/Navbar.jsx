import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='w-full py-4 bg-200 flex items-center justify-center'>
        <ul className='flex '>
            <li className='px-3 text-white'><a href="/">Tasbih</a><Link to=''></Link></li>
            <li className='px-3 text-white'><Link to='/duapage'>Dua</Link></li>
            <li className='px-3 text-white'><Link to='/'>Home</Link></li>
            <li className='px-3 text-white'><Link to='/prayertime'>PrayerTime</Link></li>
            <li className='px-3 text-white'><Link to='/quran'>Quran</Link></li>
        </ul>
      
    </div>
  )
}

export default Navbar
