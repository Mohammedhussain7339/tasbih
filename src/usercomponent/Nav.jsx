import { useState } from 'react';
import { IoIosLogOut } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { IoMdLogIn } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

function Nav() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); // State to toggle the modal

  const username = localStorage.getItem('username');
  const firstCharacter = username ? username.charAt(0).toUpperCase() : '';


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
    <div>
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

    </div>
  )
}

export default Nav
