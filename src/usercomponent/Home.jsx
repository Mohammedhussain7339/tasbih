import React, { useState } from 'react';
import Navbar from './Navbar';
import Tasbih from './Tasbih';
import Namaztasbih from './Namaztasbih';
import Nav from './Nav';

function Home() {
    const [namazTasbih, setNamazTasbih] = useState(<Tasbih />);


    const namazTasbihHandler = () => {
        setNamazTasbih(<Namaztasbih />);
    };

    const tasbihHandler = () => {
        setNamazTasbih(<Tasbih />);
    };


    return (
        <div className="w-full h-[80%] bg-gradient-to-t from-darkblue to-100">
            <Nav/>
            <div className='w-full flex justify-evenly mt-4'>
                <div 
                    className='px-5 py-2 rounded my-2 text-white cursor-pointer text-xl w-[180px] text-center bg-200 active:bg-100'
                    onClick={tasbihHandler}
                >
                    Tasbih
                </div>
                <div 
                    className='px-5 py-2 rounded my-2 text-white cursor-pointer text-xl w-[180px] text-center bg-200 active:bg-100'
                    onClick={namazTasbihHandler}
                >
                    Namaz Tasbihat
                </div>
            </div>

            {namazTasbih}
            <Navbar />
        </div>
    );
}

export default Home;
