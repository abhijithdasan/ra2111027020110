import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Button, Typography, Container } from '@material-ui/core'; 

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App 
        ButtonComponent={Button} 
        TypographyComponent={Typography} 
        ContainerComponent={Container} 
      />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
