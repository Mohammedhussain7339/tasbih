    import React, { useState,useEffect } from 'react';
    import axios from 'axios';
    import { toast, ToastContainer } from 'react-toastify';
    import 'react-toastify/dist/ReactToastify.css';

    function ShownTime() {
        const [time, setTime] = useState([]); // State to hold fetched Dua data
        const [selectedTime, setSelectedTime] = useState(null); // State to hold the Dua being edited
        const [formData, setFormData] = useState({ // State to manage form inputs
            namazName: '',
            namaztime: '',
        });
    
        // Function to fetch Duas from the backend
        const fetchNamaztime = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/namaztime'); // Ensure this URL matches your backend route
            setTime(response.data);
            console.log('Fetched Duas:', response.data);
        } catch (error) {
            console.error('Error fetching Duas:', error);
            toast.error('Error fetching Time');
        }
        };
    
        // Fetch Duas on component mount
        useEffect(() => {
            fetchNamaztime();
        }, []);
    
        // Function to handle deletion of a Dua
        const handleDelete = async (id) => {
            const confirmDelete = window.confirm('Are you sure you want to delete this Time?');
            if (!confirmDelete) return; // Exit if not confirmed
        
            try {
                await axios.delete(`http://localhost:8000/api/updatetimes/${id}`);
                toast.success('Time deleted successfully'); // Show success notification
                fetchNamaztime(); // Refresh the Namaz time list after deletion
            } catch (error) {
                console.error('Error deleting time:', error.response ? error.response.data : error.message);
                toast.error('Error deleting time'); // Show error notification
            }
        };
            
        // Function to open the edit form with selected Dua's data
        const handleEdit = (time) => {
        setSelectedTime(time);
        setFormData({
            namazName: time.namazName,
            namaztime: time.namaztime,
        });
        };
    
        // Function to handle updating the Dua
// Component: ShownTime.js
const handleUpdate = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    try {
        await axios.put(`http://localhost:8000/api/updatetimes/${selectedTime._id}`, {
            namazName: formData.namazName,
            namaztime: formData.namaztime // Match the field names correctly
        });
        toast.success('Namaz time updated successfully'); // Show success notification
        setSelectedTime(null); // Clear the selected Namaz time
        fetchNamaztime(); // Refresh the Namaz time list after updating
    } catch (error) {
        console.error('Error updating namaz time:', error);
        toast.error('Error updating namaz time'); // Show error notification
    }
};
    
    return (
        <div className="w-full  flex justify-center items-center flex-col p-4">
        <h1 className="text-xl mb-4">Namaz time List</h1>

        {/* Update Form */}
        {selectedTime && (
            <form onSubmit={handleUpdate} className="mb-4 border p-4 rounded bg-gray-100">
            <h2 className="text-lg mb-2">Edit Namaz Time</h2>
            <input
                type="text"
                value={formData.namazName}
                onChange={(e) => setFormData({ ...formData, namazName: e.target.value })}
                placeholder="Namaz Name"
                required
                className="border p-2 mb-2 w-full"
            />
            <input
                type="text"
                value={formData.namaztime}
                onChange={(e) => setFormData({ ...formData, namaztime: e.target.value })}
                placeholder="namazTime"
                required
                className="border p-2 mb-2 w-full"
            />
            <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300">
                Update Namaz Time
            </button>
            <button
                type="button"
                onClick={() => setSelectedTime(null)} // Close the form without saving
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
                <th className="border border-gray-300 p-2">Namaz Name</th>
                <th className="border border-gray-300 p-2">Namaz Time</th>
                <th className="border border-gray-300 p-2">Edit</th>
                <th className="border border-gray-300 p-2">Delete</th>
                </tr>
            </thead>
            <tbody>
                {time.length > 0 ? (
                time.map((time) => (
                    <tr key={time._id} className="border-t">
                    <td className="border border-gray-300 p-2">{time.namazName}</td>
                    <td className="border border-gray-300 p-2">{time.namaztime}</td>
                    <td className="border border-gray-300 p-2">
                        <button onClick={() => handleEdit(time)} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-2 rounded transition duration-300">
                        Edit
                        </button>
                    </td>
                    <td className="border border-gray-300 p-2">
                        <button 
                        onClick={() => handleDelete(time._id)} 
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
    )
    }

    export default ShownTime
