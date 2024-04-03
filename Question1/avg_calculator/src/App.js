import React, { useState } from 'react';
import { fetchNumbers } from './components/api';

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
      <div className="card">
        <div className="card-header">Numbers:</div>
        <ul>
          {numbers.map((number, index) => (
            <li key={index}>{number}</li>
          ))}
        </ul>
      </div>
      <div className="card">
        <div className="card-header">Window Previous State:</div>
        <ul>
          {windowPrevState.map((number, index) => (
            <li key={index}>{number}</li>
          ))}
        </ul>
      </div>
      <div className="card">
        <div className="card-header">Window Current State:</div>
        <ul>
          {windowCurrState.map((number, index) => (
            <li key={index}>{number}</li>
          ))}
        </ul>
      </div>
      <div className="card">
        <div className="card-header">Average:</div>
        <p>{average !== null ? average : 'No data'}</p>
      </div>
      <div>
        <button onClick={() => handleFetchNumbers('p')}>Fetch Prime Numbers</button>
        <button onClick={() => handleFetchNumbers('f')}>Fetch Fibonacci Numbers</button>
        <button onClick={() => handleFetchNumbers('e')}>Fetch Even Numbers</button>
        <button onClick={() => handleFetchNumbers('r')}>Fetch Random Numbers</button>
      </div>
    </div>
  );
}

export default App;
