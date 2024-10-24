import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  BASE_URL  from '../services/url';
function ShowQuotes() {
    const [quotes, setquotes] = useState([]); // State to hold fetched Dua data
    const [refresh, setRefresh]=useState()
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editQuote, setEditQuote] = useState(null); // State for managing quote editing
    const [quoteData, setQuoteData] = useState({
      whosaid: '',
      whatsaid: '',
      fontStyle: '',
      fontSize: '',
      fontFamily: '',
      fontColor: '',
      textAlign: '',
      textPosition: '',
      image: null, // Reset image state on edit

    });
  
  
    // Function to fetch Duas from the backend
    const fetchQuotes = async () => {
        setLoading(true); // Set loading to true while fetching
        try {
            const response = await axios.get(`${BASE_URL}/api/quotes`);
            setquotes(response.data);
            console.log('Fetched quotes:', response.data);
        } catch (error) {
            console.error('Error fetching quotes:', error);
            setError('Error fetching quotes');
            toast.error('Error fetching quotes'); // Display error toast
        } finally {
            setLoading(false); // Set loading to false after fetching
        }
    };

    // Fetch quotes on component mount and when refresh state changes
    useEffect(() => {
        fetchQuotes();
    }, [refresh]);

    // Function to handle deletion of a Dua
// Function to handle deletion of a Dua
const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this Time?');
    if (!confirmDelete) return; // Exit if not confirmed

    try {
        await axios.delete(`${BASE_URL}/api/updatequotes/${id}`);
        toast.success('Time deleted successfully'); // Show success notification
        
        // Update the quotes state by filtering out the deleted quote
        setquotes((prevQuotes) => prevQuotes.filter((quote) => quote._id !== id));
    } catch (error) {
        console.error('Error deleting time:', error.response ? error.response.data : error.message);
        toast.error('Error deleting time'); // Show error notification
    }
};
const handleEdit = (quote) => {
    setEditQuote(quote._id);
    setQuoteData({
      whosaid: quote.whosaid,
      whatsaid: quote.whatsaid,
      fontStyle: quote.fontStyle,
      fontSize: quote.fontSize,
      fontFamily: quote.fontFamily,
      fontColor: quote.fontColor,
      textAlign: quote.textAlign,
      textPosition: quote.textPosition,
      image: null, // New state for the uploaded image
    });
  };

  // Function to handle update
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`${BASE_URL}/api/updatequotes/${editQuote}`, quoteData);
      const updatedQuote = response.data.quote;
      setquotes(quotes.map((quote) => (quote._id === updatedQuote._id ? updatedQuote : quote))); // Update the quote in state
      setEditQuote(null); // Reset edit state
      setQuoteData({ whosaid: '', whatsaid: '', fontStyle: '', fontSize: '', fontFamily: '', fontColor: '', textAlign: '', textPosition: '',image: null });
      if (quoteData.image) {
        formData.append('image', quoteData.image); 
    }
// Clear input fields
    } catch (err) {
      console.error('Error updating quote:', err);
    }
  };
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
        setQuoteData({ ...quoteData, image: files[0] }); 
    } else {
        setQuoteData({ ...quoteData, [name]: value });
    }
};


// Render loading state or error
if (loading) return <div>Loading quotes...</div>;
if (error) return <div>{error}</div>;

    // Function to open the edit form with selected Dua's data

return (
    <div className="w-full flex justify-center items-center flex-col p-4 text-black">
    <h1 className="text-xl mb-4">Quotes</h1>

    {/* Update Form */}
    <div className="overflow-x-auto w-[90%]"> {/* Add horizontal scroll for mobile responsiveness */}
        <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
            <tr className="bg-gray-200 text-left">
            <th className="border border-gray-300 p-2">Who said</th>
            <th className="border border-gray-300 p-2">What said</th>
            <th className="border border-gray-300 p-2">Picture</th>
            <th className="border border-gray-300 p-2">Edit</th>
            <th className="border border-gray-300 p-2">Delete</th>
            </tr>
        </thead>
        <tbody>      
 
        {quotes && quotes.length > 0 ? (
            quotes.map((quote) => (
                <tr key={quote._id} className="border-t">
                                {/* <p 
              style={{
                fontStyle: quote.fontStyle, // Use fontStyle from the quote
                fontSize: `${quote.fontSize}px`, // Use fontSize from the quote
                fontFamily: quote.fontFamily, // Use fontFamily from the quote
                color: quote.fontColor, // Use fontColor from the quote
                textAlign: quote.textAlign // Use textAlign from the quote
              }}
            >
              <strong>{quote.whosaid}</strong>: {quote.whatsaid}
            </p> */}

                <td className="border border-gray-300 p-2"
                            //   style={{
                            //     fontStyle: quote.fontStyle, // Use fontStyle from the quote
                            //     fontSize: `${quote.fontSize}px`, // Use fontSize from the quote
                            //     fontFamily: quote.fontFamily, // Use fontFamily from the quote
                            //     color: quote.fontColor, // Use fontColor from the quote
                            //     textAlign: quote.textAlign // Use textAlign from the quote
                            //   }}
                
                >{quote.whosaid}</td>
                <td className="border border-gray-300 p-2"
                            //   style={{
                            //     fontStyle: quote.fontStyle, // Use fontStyle from the quote
                            //     fontSize: `${quote.fontSize}px`, // Use fontSize from the quote
                            //     fontFamily: quote.fontFamily, // Use fontFamily from the quote
                            //     color: quote.fontColor, // Use fontColor from the quote
                            //     textAlign: quote.textAlign // Use textAlign from the quote
                            //   }}
                
                >{quote.whatsaid}</td>
                <td>
                {quote.image && <img src={quote.image} alt={quote.whosaid} style={{ width: '100px' }} />}
                </td>
                <td className="border border-gray-300 p-2">
                    <button onClick={() => handleEdit(quote)} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-2 rounded transition duration-300">
                    Edit
                    </button>
                </td>
                <td className="border border-gray-300 p-2">
                    <button 
                    onClick={() => handleDelete(quote._id)} 
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
    {editQuote && (
    <div className="max-w-md mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow-md">
        <form onSubmit={handleUpdate}>
            <h2 className="text-2xl font-bold mb-4">Edit Quote</h2>
            <div className="space-y-4">
                <input
                    type="text"
                    name="whosaid"
                    value={quoteData.whosaid}
                    onChange={handleChange}
                    placeholder="Who said"
                    required
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    name="whatsaid"
                    value={quoteData.whatsaid}
                    onChange={handleChange}
                    placeholder="What was said"
                    required
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            <input type="file" name="image" accept="image/*" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />

                <input
                    type="text"
                    name="fontStyle"
                    value={quoteData.fontStyle}
                    onChange={handleChange}
                    placeholder="Font Style"
                    required
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    name="fontSize"
                    value={quoteData.fontSize}
                    onChange={handleChange}
                    placeholder="Font Size"
                    required
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    name="fontFamily"
                    value={quoteData.fontFamily}
                    onChange={handleChange}
                    placeholder="Font Family"
                    required
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    name="fontColor"
                    value={quoteData.fontColor}
                    onChange={handleChange}
                    placeholder="Font Color"
                    required
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    name="textAlign"
                    value={quoteData.textAlign}
                    onChange={handleChange}
                    placeholder="Text Align"
                    required
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    name="textPosition"
                    value={quoteData.textPosition}
                    onChange={handleChange}
                    placeholder="Text Position"
                    required
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="flex justify-between mt-6">
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
                >
                    Update Quote
                </button>
                <button
                    type="button"
                    onClick={() => setEditQuote(null)}
                    className="bg-gray-300 text-black py-2 px-4 rounded hover:bg-gray-400 transition duration-200"
                >
                    Cancel
                </button>
            </div>
        </form>
    </div>
)}
    

    <ToastContainer />
    </div>
)
}

export default ShowQuotes
