import React, { useState } from 'react';
import { fetchNumbers } from './components/api'; // Import the fetchNumbers function from api.js

function App() {
  const [numbers, setNumbers] = useState([]);
  const [windowPrevState, setWindowPrevState] = useState([]);
  const [windowCurrState, setWindowCurrState] = useState([]);
  const [average, setAverage] = useState(null);

  const handleFetchNumbers = async (type) => {
    try {
      const response = await fetchNumbers(type);
      setNumbers(response.numbers);
      setWindowPrevState(response.windowPrevState);
      setWindowCurrState(response.windowCurrState);
      setAverage(response.avg);
    } catch (error) {
      console.error('Error fetching numbers:', error);
    }
  };

  return (
    <div className="App">
      <h1>Average Calculator Microservice</h1>
      <div>
        <button onClick={() => handleFetchNumbers('p')}>Fetch Prime Numbers</button>
        <button onClick={() => handleFetchNumbers('f')}>Fetch Fibonacci Numbers</button>
        <button onClick={() => handleFetchNumbers('e')}>Fetch Even Numbers</button>
        <button onClick={() => handleFetchNumbers('r')}>Fetch Random Numbers</button>
      </div>
      <div>
        <h2>Numbers:</h2>
        <ul>
          {numbers.map((number, index) => (
            <li key={index}>{number}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Window Previous State:</h2>
        <ul>
          {windowPrevState.map((number, index) => (
            <li key={index}>{number}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Window Current State:</h2>
        <ul>
          {windowCurrState.map((number, index) => (
            <li key={index}>{number}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Average:</h2>
        <p>{average !== null ? average : 'No data'}</p>
      </div>
    </div>
  );
}

export default App;
