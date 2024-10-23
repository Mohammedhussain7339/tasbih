import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Namaztime() {
    const [namazTime, setnamazTime] = useState({
        namazName: '',
        namaztime: '',
      });
      const changeHandler = (e) => {
        const { name, value } = e.target;
        setnamazTime({
          ...namazTime,
          [name]: value
        });
        console.log(namazTime)
      };
    const submitHandler= async(e)=>{
        e.preventDefault();
        if (!namazTime.namazName || !namazTime.namaztime) {
            toast.error('Please fill out all fields');
            return;
          }
      
          const formData = new FormData();
          formData.append('namazName', namazTime.namazName);
          formData.append('namaztime', namazTime.namaztime);
      
          try {
            const response = await axios.post('http://localhost:8000/api/namaztime', formData, {
              headers: {
                'Content-Type': 'application/json',
              },
            });
            console.log('Response:', response.data);
            toast.success('Namazetime added successfully');
            setnamazTime({
                namazName: '',
                namaztime: ''
              });
        
          } catch (error) {
            console.error('Error during submission:', error);
            toast.error('An error occurred while adding the Dua');
          }
        };
      
    
  return (
    <div className="w-full flex justify-center items-center flex-col  p-4">
    <h1 className="text-2xl font-semibold mb-6">Add Namaz Timing</h1>
    <form className="flex flex-col w-full max-w-md border rounded-lg p-6 bg-white shadow-md" onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Enter Namazname"
        name="namazName"
        onChange={changeHandler}
        value={namazTime.namazName}
        className="mb-4 p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Enter Namaz Time"
        name="namaztime"
        onChange={changeHandler}
        value={namazTime.namaztime}
        className="mb-4 p-2 border rounded"
      />
      <button type="submit" className="bg-blue-500 text-white rounded py-2 hover:bg-blue-600 transition duration-200">
        Submit
      </button>
    </form>
    <ToastContainer />
  </div>
)
}

export default Namaztime
