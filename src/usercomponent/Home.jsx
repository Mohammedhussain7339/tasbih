import React, { useState } from 'react';
import Navbar from './Navbar';
import Tasbih from './Tasbih';
import Namaztasbih from './Namaztasbih';
import { IoIosLogOut } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { IoMdLogIn } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    const [namazTasbih, setNamazTasbih] = useState(<Tasbih />);
    const [isOpen, setIsOpen] = useState(false); // State to toggle the modal

    const username = localStorage.getItem('username');
    const firstCharacter = username ? username.charAt(0).toUpperCase() : '';

    const namazTasbihHandler = () => {
        setNamazTasbih(<Namaztasbih />);
    };

    const tasbihHandler = () => {
        setNamazTasbih(<Tasbih />);
    };

    const modalToggleHandler = () => {
        setIsOpen(!isOpen);
    };

    const logoutHandler = () => {
        localStorage.removeItem('username'); // Clear username from localStorage
        localStorage.removeItem('jwtToken'); // Clear username from localStorage
        setIsOpen(false);
        navigate('/login'); // Redirect to login page
    };

    return (
        <div className="w-full h-[80%] bg-gradient-to-t from-darkblue to-100">
            <nav className='bg-darkblue py-3 px-3 text-white text-2xl flex justify-between'>
                <h1>Tasbih</h1>
                <div 
                    className='w-10 h-10 rounded-full bg-100 flex justify-center items-center cursor-pointer'
                    onClick={modalToggleHandler}
                >
                    {!username ? <IoMdLogIn className='text-green-700' /> : firstCharacter}
                </div>
            </nav>

            {isOpen && (
                <div className='w-[300px] h-[300px] text-black rounded-lg bg-white absolute right-0 top-0 p-4'>
                    <div className='flex flex-col text-center w-full h-full items-center justify-center relative'>
                        <h1 
                            className='text-red-500 absolute right-1 top-1 cursor-pointer'
                            onClick={() => setIsOpen(false)}
                        >
                            <IoCloseSharp />
                        </h1>
                        <h1 className='text-2xl text-black capitalize'>Hello! {username}</h1>
                        <p className='px-1 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, ullam.</p>
                        {username ? (
                            <h1 
                                className='text-red-500 cursor-pointer'
                                onClick={logoutHandler}
                            >
                                Logout <IoIosLogOut className='inline mx-1' />
                            </h1>
                        ) : (
                            <h1 
                                className='text-green-700 cursor-pointer'
                                onClick={() => navigate('/login')}
                            >
                                Login <IoMdLogIn className='inline mx-1' />
                            </h1>
                        )}
                            
                            {username=='Mohammed_7339'?<h1 
                                className='text-green-700 cursor-pointer'
                                onClick={() => navigate('/adminHome')}
                            >
                                AdminHome <IoMdLogIn className='inline mx-1' />
                            </h1>:null}
                    </div>
                </div>
            )}

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
