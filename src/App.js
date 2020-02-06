import React, { useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState(0)
  const handleSubmit = (event) => {
    event.preventDefault()
    setResult(getFactorialNumber(event.target[0].value))
  };
  const getFactorialNumber = (factorialNumber) => {
    if (factorialNumber < 0)
          return -1;
    else if (factorialNumber == 0)
        return 1;
    else {
        return (factorialNumber * getFactorialNumber(factorialNumber - 1));
    }
  };
  return (
      <div className="App">
        <h2>Factorial Calculator</h2>
        <form className="myForm" onSubmit={handleSubmit}>
          <input
              type="number"
              placeholder="Enter a number..."
              className="formField"
              required
          />
          <button className="myButton">Calculate Factorial</button>
        </form>
        <h2>Factorial: {result}</h2>
      </div>
  );
}

export default App;
