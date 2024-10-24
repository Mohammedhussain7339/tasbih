import React, { useState } from 'react';

function Profile() {
  const [text, setText] = useState('');
  const [displayText, setDisplayText] = useState([]); // State to hold the displayed text as an array

  const submitHandler = () => {
    if (text.trim() !== '') { // Prevent adding empty strings
      // Append the current text to the displayed text array
      setDisplayText((prev) => [...prev, text]); // Use spread operator to create a new array
      setText(''); // Clear the input field after submission
    }
  };

  const changeHandler = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        name="text"
        onChange={changeHandler}
        value={text}
        placeholder="Enter your todo"
      />
      <ul>
        {displayText.map((val, index) => (
          <li className='' key={index}>{val}</li> // Render each item as a list element
        ))}
      </ul>
      <button onClick={submitHandler}>Submit</button>
    </div>
  );
}

export default Profile;
