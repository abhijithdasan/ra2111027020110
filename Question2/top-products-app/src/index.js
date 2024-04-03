// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { Card, CardContent, Typography } from '@material-ui/core'; // Import Material-UI components

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App Card={Card} CardContent={CardContent} Typography={Typography} /> {/* Pass Material-UI components as props */}
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
