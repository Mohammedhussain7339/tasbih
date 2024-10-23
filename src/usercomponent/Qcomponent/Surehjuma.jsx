import React from 'react'
import surehjuma1 from  '../../../public/sureh_juma/surehjuma1.jpg'
import surehjuma2 from  '../../../public/sureh_juma/surehjuma2.jpg'
import Nav from '../Nav'
function Surehjuma() {
    const surehjuma=[
        {path:surehjuma1, alt:'surehjumapage1'},
        {path:surehjuma2, alt:'surehjumapage1'}
    ]
  return (
    <div className='bg-200'>
    <Nav />
    <div className='mt-4 h-[85vh] overflow-y-scroll scrollbar-hide'>
        <h1 className='text-center text-white text-2xl underline'>سورة الجمعة</h1>

        {/* Image Container */}
        <div className='w-full flex flex-col items-center'>
            {/* Dynamically render each image using map */}
            {surehjuma.map((image, index) => (
                <img
                    key={index}
                    className={`w-full ${index === 0 ? 'rounded-t-md' : ''} ${index === surehjuma.length - 1 ? 'rounded-b-md mb-3' : ''} md:w-[70%] lg:w-[60%] `}
                    src={image.path}
                    alt={image.alt}
                />
            ))}
        </div>
    </div>
</div>
)
}

export default Surehjuma
