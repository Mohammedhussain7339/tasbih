import React from 'react'
import surehmulk1 from '../../../public/sureh_mulk/surehmulk1.jpg'
import surehmulk2 from '../../../public/sureh_mulk/surehmulk2.jpg'
import surehmulk3 from '../../../public/sureh_mulk/surehmulk3.jpg'
import surehmulk4 from '../../../public/sureh_mulk/surehmulk4.jpg'
import Nav from '../Nav'

function Surehmulk() {
    const surehmulk = [
        { path: surehmulk1, alt: "Sureh Mulk Page 1" },
        { path: surehmulk2, alt: "Sureh Mulk Page 2" },
        { path: surehmulk3, alt: "Sureh Mulk Page 3" },
        { path: surehmulk4, alt: "Sureh Mulk Page 4" }
    ];

    return (
        <div className='bg-200'>
            <Nav />
            <div className='mt-4 h-[85vh] overflow-y-scroll scrollbar-hide'>
                <h1 className='text-center text-white text-2xl underline'>Sureh Mulk</h1>

                {/* Image Container */}
                <div className='w-full flex flex-col items-center'>
                    {/* Dynamically render each image using map */}
                    {surehmulk.map((image, index) => (
                        <img
                            key={index}
                            className={`w-full ${index === 0 ? 'rounded-t-md' : ''} ${index === surehmulk.length - 1 ? 'rounded-b-md mb-3' : ''} md:w-[70%] lg:w-[60%] `}
                            src={image.path}
                            alt={image.alt}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Surehmulk;
