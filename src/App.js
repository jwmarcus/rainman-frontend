import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
// import { click } from '@testing-library/user-event/dist/click';

function MyButton(props)  {
  // Initialize teh state variable'clickCount' to 0
  // NOTE: This is the standard pattern for initializing state in a function component
  
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    // Increment click count
    setClickCount(clickCount + 1);

    // Call the onClick prop if it is provided
    if (props.onClick) {
      props.onClick()
    }
  }
  
  return (
    <button onClick={handleClick}>
      {props.label} (clicked {clickCount} times)
    </button>
  );
}

function App() {

  // From tutorial, handlers should be in the component themselves
  // const handleClick = () => {
  //   alert('Button clicked');
  // }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.<br/>
          Yo.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyButton label="Click me" /> { /* onClick={handleClick} */ } 
      </header>
    </div>
  );
}

export default App;
