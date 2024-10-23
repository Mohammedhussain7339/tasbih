import React from 'react'
import Nav from '../Nav'
import kul1 from '../../../public/kuls/kul1.png'
import kul2 from '../../../public/kuls/kul2.png'
import kul3 from '../../../public/kuls/kul3.png'
import kul4 from '../../../public/kuls/kul4.png'
function Kul() {
    const kul=[
        {path:kul1,alt:'kul'},
        {path:kul2,alt:'kul'},
        {path:kul3,alt:'kul'},
        {path:kul4,alt:'kul'}
    ]
  return (
    <div className='bg-200'>
    <Nav />
    <div className='mt-4 h-[85vh] overflow-y-scroll scrollbar-hide'>
        <h1 className='text-center text-white text-2xl underline'>Four Kuls</h1>

        {/* Image Container */}
        <div className='w-full flex flex-col items-center'>
            {/* Dynamically render each image using map */}
            {kul.map((image, index) => (
                <img
                    key={index}
                    className={`w-full ${index === 0 ? 'rounded-t-md' : ''} ${index === kul.length - 1 ? 'rounded-b-md mb-3' : ''} md:w-[70%] lg:w-[60%] `}
                    src={image.path}
                    alt={image.alt}
                />
            ))}
        </div>
    </div>
</div>  )
}

export default Kul
