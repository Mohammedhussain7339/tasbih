// src/FetchData.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ShowDua() {
  const [duas, setDuas] = useState([]); // State to hold fetched Dua data
  const [selectedDua, setSelectedDua] = useState(null); // State to hold the Dua being edited
  const [formData, setFormData] = useState({ // State to manage form inputs
    duaTitle: '',
    duaDes: '',
    dua: '',
    tarjuma: '',
  });

  // Function to fetch Duas from the backend
  const fetchDuas = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/duas'); // Ensure this URL matches your backend route
      setDuas(response.data);
      console.log('Fetched Duas:', response.data);
    } catch (error) {
      console.error('Error fetching Duas:', error);
      toast.error('Error fetching Duas');
    }
  };

  // Fetch Duas on component mount
  useEffect(() => {
    fetchDuas();
  }, []);

  // Function to handle deletion of a Dua
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this Dua?');
    if (!confirmDelete) return; // Exit if not confirmed

    try {
      await axios.delete(`http://localhost:8000/api/updateduas/${id}`); // Use the complete URL
      toast.success('Dua deleted successfully'); // Show success notification
      fetchDuas(); // Refresh the Dua list after deletion
    } catch (error) {
      console.error('Error deleting Dua:', error);
      toast.error('Error deleting Dua'); // Show error notification
    }
  };

  // Function to open the edit form with selected Dua's data
  const handleEdit = (dua) => {
    setSelectedDua(dua);
    setFormData({
      duaTitle: dua.duaTitle,
      duaDes: dua.duaDes,
      dua: dua.dua,
      tarjuma: dua.tarjuma,
    });
  };

  // Function to handle updating the Dua
  const handleUpdate = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    try {
      await axios.put(`http://localhost:8000/api/updateduas/${selectedDua._id}`, formData); // Update the Dua
      toast.success('Dua updated successfully'); // Show success notification
      setSelectedDua(null); // Clear the selected Dua
      fetchDuas(); // Refresh the Dua list after updating
    } catch (error) {
      console.error('Error updating Dua:', error);
      toast.error('Error updating Dua'); // Show error notification
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center flex-col p-4">
      <h1 className="text-xl mb-4">Dua List</h1>

      {/* Update Form */}
      {selectedDua && (
        <form onSubmit={handleUpdate} className="mb-4 border p-4 rounded bg-gray-100">
          <h2 className="text-lg mb-2">Edit Dua</h2>
          <input
            type="text"
            value={formData.duaTitle}
            onChange={(e) => setFormData({ ...formData, duaTitle: e.target.value })}
            placeholder="Title"
            required
            className="border p-2 mb-2 w-full"
          />
          <input
            type="text"
            value={formData.duaDes}
            onChange={(e) => setFormData({ ...formData, duaDes: e.target.value })}
            placeholder="Description"
            required
            className="border p-2 mb-2 w-full"
          />
          <input
            type="text"
            value={formData.dua}
            onChange={(e) => setFormData({ ...formData, dua: e.target.value })}
            placeholder="Dua"
            required
            className="border p-2 mb-2 w-full"
          />
          <input
            type="text"
            value={formData.tarjuma}
            onChange={(e) => setFormData({ ...formData, tarjuma: e.target.value })}
            placeholder="Tarjuma"
            required
            className="border p-2 mb-2 w-full"
          />
          <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300">
            Update Dua
          </button>
          <button
            type="button"
            onClick={() => setSelectedDua(null)} // Close the form without saving
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition duration-300 ml-2"
          >
            Cancel
          </button>
        </form>
      )}

      <div className="overflow-x-auto w-[90%]"> {/* Add horizontal scroll for mobile responsiveness */}
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="border border-gray-300 p-2">Title</th>
              <th className="border border-gray-300 p-2">Description</th>
              <th className="border border-gray-300 p-2">Dua</th>
              <th className="border border-gray-300 p-2">Tarjuma</th>
              <th className="border border-gray-300 p-2">Edit</th>
              <th className="border border-gray-300 p-2">Delete</th>
            </tr>
          </thead>
          <tbody>
            {duas.length > 0 ? (
              duas.map((dua) => (
                <tr key={dua._id} className="border-t">
                  <td className="border border-gray-300 p-2">{dua.duaTitle}</td>
                  <td className="border border-gray-300 p-2">{dua.duaDes}</td>
                  <td className="border border-gray-300 p-2">{dua.dua}</td>
                  <td className="border border-gray-300 p-2">{dua.tarjuma}</td>
                  <td className="border border-gray-300 p-2">
                    <button onClick={() => handleEdit(dua)} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-2 rounded transition duration-300">
                      Edit
                    </button>
                  </td>
                  <td className="border border-gray-300 p-2">
                    <button 
                      onClick={() => handleDelete(dua._id)} 
                      className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-2 rounded transition duration-300"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center p-4">No data found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </div>
  );
}

export default ShowDua;
