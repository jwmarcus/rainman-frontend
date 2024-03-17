import React, { useState } from "react";
import "./MyButton.css";

function MyButton(props) {
  // Initialize teh state variable'clickCount' to 0
  // NOTE: This is the standard pattern for initializing state in a function component

  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    // Increment click count
    setClickCount(clickCount + 1);

    // Call the onClick prop if it is provided
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <button onClick={handleClick}>
      {props.label} (clicked {clickCount} times)
    </button>
  );
}

export default MyButton;