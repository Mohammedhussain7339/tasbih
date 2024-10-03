import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Quotes() {
  const [quotesInfo, setQuotesInfo] = useState({
    whosaid: '',
    whatsaid: '',
    image: null, // State to hold the image file
  });
  const [imagePreview, setImagePreview] = useState(''); // State for the image preview

  // States for text styling
  const [fontStyle, setFontStyle] = useState('normal');
  const [fontSize, setFontSize] = useState('16');
  const [fontFamily, setFontFamily] = useState('Arial');
  const [fontColor, setFontColor] = useState('#ffffff');
  const [textAlign, setTextAlign] = useState('center');
  const [textPosition, setTextPosition] = useState('center'); // Added text position state

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setQuotesInfo({
      ...quotesInfo,
      [name]: value,
    });
  };

  // Function to handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the first selected file
    if (file) {
      setQuotesInfo({
        ...quotesInfo,
        image: file, // Set the first selected file
      });
      // Create a preview URL for the selected image
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
  
    // Validation check to ensure all fields are filled
    if (!quotesInfo.whosaid || !quotesInfo.whatsaid || !quotesInfo.image) {
      toast.error('Please fill out all fields and select an image');
      return;
    }
  
    const formData = new FormData();
    formData.append('whosaid', quotesInfo.whosaid);
    formData.append('whatsaid', quotesInfo.whatsaid);
    formData.append('image', quotesInfo.image); // Append the image file
    formData.append('fontStyle', fontStyle);    // Append font style
    formData.append('fontSize', fontSize);      // Append font size
    formData.append('fontFamily', fontFamily);  // Append font family
    formData.append('fontColor', fontColor);    // Append font color
    formData.append('textAlign', textAlign);    // Append text alignment
    formData.append('textPosition', textPosition); // Append text position
  
    try {
      const response = await axios.post('http://localhost:8000/api/quotes', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Response:', response.data);
      toast.success('Quote added successfully');
      // Clear the form fields after submission
      setQuotesInfo({
        whosaid: '',
        whatsaid: '',
        image: null,
      });
      setImagePreview(''); // Clear the image preview after submission
    } catch (error) {
      console.error('Error during submission:', error);
      toast.error('An error occurred while adding the quote');
    }
  };
  
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col bg-gray-100 p-4">
      <h1 className="text-2xl font-semibold mb-6">Add Quote</h1>
      <form className="flex flex-col w-full max-w-md border rounded-lg p-6 bg-white shadow-md" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter Quote Author"
          name="whosaid"
          onChange={changeHandler}
          value={quotesInfo.whosaid}
          className="mb-4 p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Enter Quote"
          name="whatsaid"
          onChange={changeHandler}
          value={quotesInfo.whatsaid}
          className="mb-4 p-2 border rounded"
        />
        <input
          type="file"
          accept="image/*" // Accept image files only
          onChange={handleFileChange}
          className="mb-4 p-2 border rounded"
        />
        <button type="submit" className="bg-blue-500 text-white rounded py-2 hover:bg-blue-600 transition duration-200">
          Submit
        </button>
      </form>

      {/* Text Style Options */}
      {imagePreview && (
        <div className="mt-4 relative w-1/4">
          <img src={imagePreview} alt="Selected Preview" className="w-full mt-2 h-[300px] object-cover rounded" />
          <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center bg-black bg-opacity-50 rounded">
            <div className={`w-full absolute ${textPosition === 'top' ? 'top-2' : textPosition === 'bottom' ? 'bottom-2' : 'top-1/2 transform -translate-y-1/2'} text-center`}>
              <p
                className={`text-${fontColor} font-${fontStyle}`}
                style={{
                  fontSize: `${fontSize}px`,
                  fontFamily: fontFamily,
                  color: fontColor,
                  textAlign: textAlign,
                }}
              >
                {quotesInfo.whosaid}
              </p>
              <p
                className={`text-${fontColor} font-${fontStyle}`}
                style={{
                  fontSize: `${fontSize}px`,
                  fontFamily: fontFamily,
                  color: fontColor,
                  textAlign: textAlign,
                }}
              >
                {quotesInfo.whatsaid}
              </p>
            </div>
            
          </div>
          <div className='bg-red-200 my-10 absolute'>
            <div className="flex mb-2">
              <select value={fontStyle} onChange={(e) => setFontStyle(e.target.value)} className="mr-2 p-1 border rounded">
                <option value="normal">Normal</option>
                <option value="bold">Bold</option>
                <option value="italic">Italic</option>
              </select>
              <select value={fontSize} onChange={(e) => setFontSize(e.target.value)} className="mr-2 p-1 border rounded">
                <option value="16">16px</option>
                <option value="20">20px</option>
                <option value="24">24px</option>
                <option value="28">28px</option>
                <option value="32">32px</option>
              </select>
              <select value={fontFamily} onChange={(e) => setFontFamily(e.target.value)} className="mr-2 p-1 border rounded">
                <option value="Arial">Arial</option>
                <option value="Courier New">Courier New</option>
                <option value="Georgia">Georgia</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Verdana">Verdana</option>
              </select>
              <input
                type="color"
                value={fontColor}
                onChange={(e) => setFontColor(e.target.value)}
                className="mr-2 border rounded"
              />
              <select value={textAlign} onChange={(e) => setTextAlign(e.target.value)} className="mr-2 p-1 border rounded">
                <option value="left">Left</option>
                <option value="center">Center</option>
                <option value="right">Right</option>
              </select>
              <select value={textPosition} onChange={(e) => setTextPosition(e.target.value)} className="p-1 border rounded">
                <option value="top">Top</option>
                <option value="center">Center</option>
                <option value="bottom">Bottom</option>
              </select>
            </div>
            </div>

        </div>
      )}

      <ToastContainer />
    </div>
  );
}

export default Quotes;
