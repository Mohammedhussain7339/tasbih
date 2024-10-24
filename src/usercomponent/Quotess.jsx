import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import border1 from "../../public/border1.png";
import BASE_URL from "../services/url";
import Nav from "./Nav";
import Navbar from "./Navbar";
function Quotes() {
  const [Quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false); // State to handle loading
  const [refresh, setRefresh] = useState(false); // State to trigger a re-render
  const [fontStyle, setFontStyle] = useState("normal");
  const [fontSize, setFontSize] = useState("16");
  const [fontFamily, setFontFamily] = useState("Arial");
  const [fontColor, setFontColor] = useState("#ffffff");
  const [textAlign, setTextAlign] = useState("center");
  const [textPosition, setTextPosition] = useState("center"); // Added text position state

  const fetchQuotes = async () => {
    setLoading(true); // Set loading to true while fetching
    try {
      const response = await axios.get(`${BASE_URL}/api/quotes`);
      setQuotes(response.data);
      console.log("Fetched quotes:", response.data);
    } catch (error) {
      console.error("Error fetching quotes:", error);
      setError("Error fetching quotes");
      toast.error("Error fetching quotes"); // Display error toast
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  // Fetch quotes on component mount and when refresh state changes
  useEffect(() => {
    fetchQuotes();
  }, [refresh]);

  return (
    <>
      {/* Navigation Bar */}
      <Nav />
      {/* Main Content */}
      <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-100 to-500">
        <h1 className="text-2xl font-bold mb-5 text-white underline">Quotes</h1>

        {/* Cards Container */}
        <div className="flex flex-wrap  w-[90%] xsm:p-0  max-w-[1200px] h-full justify-center p-5">
          {Quotes.map((quotes, index) => (
            <div
              key={index}
              className="relative  w-full xsm:h-[400px] sm:w-1/2 md:w-1/2   lg:w-1/2 h-[330px] overflow-hidden border border-darkblue shadow-black shadow-md rounded-xl p-1 m-2">
              {/* Image */}
              {quotes.image && (
                <div className="flex justify-center bg-200">
                  {" "}
                  {/* Centers the image horizontally */}
                  <img
                    src={quotes.image}
                    alt={quotes.whosaid}
                    className="w-[600px] h-[500px] rounded-lg object-cover " // Adjust width here (1/2 = 50% of the container)
                    style={{ maxHeight: "500px" , maxWidth: "600px" }} // Set max height
                  />
                </div>
              )}

              {/* Text Overlay */}
              <div className="absolute top-0 left-0 px-10 xsm:px-1   w-full h-full text-center font-bold p-4  flex flex-col justify-center">
                <p
                  style={{
                    fontSize: `${quotes.fontSize}px`,
                    fontFamily: quotes.fontFamily,
                    color: quotes.fontColor, // Set the font color directly
                    textAlign: quotes.textAlign,
                  }}
                  className={`${quotes.fontStyle} mb-1`} // Apply font style conditionally
                >
                  {quotes.whosaid}
                </p>

                <p
                  className={`text-${quotes.fontColor} font-${quotes.fontStyle}`}
                  style={{
                    fontSize: `${quotes.fontSize}px`,
                    fontFamily: quotes.fontFamily,
                    textAlign: quotes.textAlign,
                    color: quotes.fontColor, // Set the font color directly

                  }}>
                  {quotes.whatsaid}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
          <Navbar/>
      {/* Toast Container for Notifications */}
      <ToastContainer />
    </>
  );
}

export default Quotes;
