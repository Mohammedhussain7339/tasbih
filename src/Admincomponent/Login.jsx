import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import  BASE_URL  from '../services/url';
function Login() {
    const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    // Validation check to ensure all fields are filled
    if (!userInfo.email || !userInfo.password) {
      toast.error('Please fill out all fields');
      return;
    }

    // Prepare data for the request
    const data = {
      email: userInfo.email,
      password: userInfo.password,
    };

    try {
      const response = await axios.post(`${BASE_URL}/api/login`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Response:', response.data);
      
      // Assuming the response contains a token and username
      const { token, username } = response.data;
      localStorage.setItem('jwtToken', token);
      localStorage.setItem('username', username);
      
      toast.success('Login successful!');
      navigate('/');
      // Redirect or perform other actions on successful login
      
    } catch (error) {
      console.error('Error during submission:', error);
      toast.error('An error occurred while logging in');
    }
  };

  return (
    <>
      <div className="w-full flex justify-center items-center flex-col p-4">
        <h1 className="text-2xl font-semibold mb-6">Login</h1>
        <form className="flex flex-col w-full max-w-md border rounded-lg p-6 bg-white shadow-md" onSubmit={submitHandler}>
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
          <div className='flex justify-between'>
            <h1 className='cursor-pointer text-blue-500'>Forget Password</h1>
            <h1 className='cursor-pointer text-green-500'><Link to='/signup'>SignUp</Link></h1>
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

export default Login;
