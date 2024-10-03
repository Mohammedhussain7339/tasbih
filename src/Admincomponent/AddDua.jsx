import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddData() {
  const [duaInfo, setDuaInfo] = useState({
    duaTitle: '',
    duaDescription: '',
    dua: '',
    tarjuma: '', // Ensure this field is consistent with your schema
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setDuaInfo({
      ...duaInfo,
      [name]: value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    // Validation check to ensure all fields are filled
    if (!duaInfo.duaTitle || !duaInfo.duaDescription || !duaInfo.dua || !duaInfo.tarjuma) {
      toast.error('Please fill out all fields');
      return;
    }

    const formData = new FormData();
    formData.append('duaTitle', duaInfo.duaTitle);
    formData.append('duaDescription', duaInfo.duaDescription);
    formData.append('dua', duaInfo.dua);
    formData.append('tarjuma', duaInfo.tarjuma); // Correct field name here

    try {
      const response = await axios.post('http://localhost:8000/api/duas', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Response:', response.data);
      toast.success('Dua added successfully');
    } catch (error) {
      console.error('Error during submission:', error);
      toast.error('An error occurred while adding the Dua');
    }
  };

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center flex-col bg-gray-100 p-4">
        <h1 className="text-2xl font-semibold mb-6">Add Dua</h1>
        <form className="flex flex-col w-full max-w-md border rounded-lg p-6 bg-white shadow-md" onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Enter Dua Title"
            name="duaTitle"
            onChange={changeHandler}
            value={duaInfo.duaTitle}
            className="mb-4 p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Dua Description"
            name="duaDescription"
            onChange={changeHandler}
            value={duaInfo.duaDescription}
            className="mb-4 p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Dua"
            name="dua"
            onChange={changeHandler}
            value={duaInfo.dua}
            className="mb-4 p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Dua Tarjuma"
            name="tarjuma" // Ensure this matches your schema
            onChange={changeHandler}
            value={duaInfo.tarjuma}
            className="mb-4 p-2 border rounded"
          />
          <button type="submit" className="bg-blue-500 text-white rounded py-2 hover:bg-blue-600 transition duration-200">
            Submit
          </button>
        </form>
        <ToastContainer />
      </div>
  
    </>
  );
}

export default AddData;
