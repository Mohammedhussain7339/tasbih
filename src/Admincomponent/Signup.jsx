import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
function Signup() {
  const [userInfo, setUserInfo] = useState({
    username: '',
    email: '',
    password: '',
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,  // Spread the existing state
      [name]: value,  // Update the changed field
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    // Validation check to ensure all fields are filled
    if (!userInfo.username || !userInfo.email || !userInfo.password) {
      toast.error('Please fill out all fields');
      return;
    }

    try {
      // Send JSON data instead of FormData
      const response = await axios.post('http://localhost:8000/api/signup', userInfo, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Response:', response.data);
      const { token, username } = response.data;
      
      // Save token and username in localStorage
      localStorage.setItem('jwtToken', token);
      localStorage.setItem('username', username);

      // Print username in the console
      console.log('Username:', username);

      toast.success('User created successfully');
    } catch (error) {
      console.error('Error during submission:', error);
      toast.error('An error occurred while creating the user');
    }
  };

  return (
    <>
      <div className="w-full flex justify-center items-center flex-col p-4">
        <h1 className="text-2xl font-semibold mb-6">SignUp</h1>
        <form className="flex flex-col w-full max-w-md border rounded-lg p-6 bg-white shadow-md" onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Enter Username"
            name="username"
            onChange={changeHandler}
            value={userInfo.username}
            className="mb-4 p-2 border rounded"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={changeHandler}
            value={userInfo.email}
            className="mb-4 p-2 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={changeHandler}
            value={userInfo.password}
            className="mb-4 p-2 border rounded"
          />
          <div>
            <h1 className='text-blue-400 my-1 font-extrabold'><Link to='/login'>Login</Link></h1>
          </div>
          <button type="submit" className="bg-blue-500 text-white rounded py-2 hover:bg-blue-600 transition duration-200">
            Submit
          </button>
        </form>
        <ToastContainer />
      </div>
    </>
  );
}

export default Signup;
