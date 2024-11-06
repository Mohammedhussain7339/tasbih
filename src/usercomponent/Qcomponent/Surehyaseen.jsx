import React from 'react'
import yasin0 from '../../../public/yasinn/yaseen-images-0.jpg'
import yasin1 from '../../../public/yasinn/yaseen-images-1.jpg'
import yasin2 from '../../../public/yasinn/yaseen-images-2.jpg'
import yasin3 from '../../../public/yasinn/yaseen-images-3.jpg'
import yasin4 from '../../../public/yasinn/yaseen-images-4.jpg'
import yasin5 from '../../../public/yasinn/yaseen-images-5.jpg'
import yasin6 from '../../../public/yasinn/yaseen-images-6.jpg'
import yasin7 from '../../../public/yasinn/yaseen-images-7.jpg'
import Nav from '../Nav'

function Surehyaseen() {
  // Array to hold image data
  const images = [
    { src: yasin0, alt: 'Yasin Image 0' },
    { src: yasin1, alt: 'Yasin Image 1' },
    { src: yasin2, alt: 'Yasin Image 2' },
    { src: yasin3, alt: 'Yasin Image 3' },
    { src: yasin4, alt: 'Yasin Image 4' },
    { src: yasin5, alt: 'Yasin Image 5' },
    { src: yasin6, alt: 'Yasin Image 6' },
    { src: yasin7, alt: 'Yasin Image 7' }
  ];

  return (
    <div>
      <Nav />
      <h1 className='text-center  text-white underline lg:text-4xl xsm:text-2xl bg-200 py-1'>ياسين      </h1>
      <div className='overflow-y-scroll scrollbar-hide w-full h-[90vh] flex justify-center bg-200'>
        <div className='flex xl:w-[60%] xsm:w-[100%] flex-wrap relative z-0'>
          {/* Map through images array */}
          {images.map((image, index) => (
            <img
              key={index}
              className={`w-[50%] shadow-lg xsm:w-full ${index === 0 ? 'rounded-t-xl' : ''} ${index === images.length - 1 ? 'rounded-b-xl mb-4' : ''} `}
              src={image.src}
              alt={image.alt}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Surehyaseen
