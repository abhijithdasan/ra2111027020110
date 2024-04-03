// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Card, CardContent, Typography } from '@material-ui/core'; // Add this import

const AllProducts = () => (
  <div>
    <h1>All Products</h1>
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          Product 1
        </Typography>
        <Typography color="textSecondary">
          Company: Company A
        </Typography>
        <Typography color="textSecondary">
          Price: $100
        </Typography>
        <Typography color="textSecondary">
          Rating: 4.5/5
        </Typography>
        <Typography color="textSecondary">
          Discount: 10% off
        </Typography>
        <Typography color="textSecondary">
          Availability: In stock
        </Typography>
        
      </CardContent>
    </Card>
  </div>
);

const ProductDetails = ({ match }) => (
  <div>
    <h1>Product Details</h1>
    <p>Product ID: {match.params.id}</p>
    <p>Product Name: Product {match.params.id}</p>
    <p>Company: Company X</p>
    <p>Price: $100</p>
    <p>Rating: 4.5/5</p>
    <p>Discount: 10% off</p>
    <p>Availability: In stock</p>
    <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    
  </div>
);

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={AllProducts} />
        <Route path="/product/:id" component={ProductDetails} />
      </div>
    </Router>
  );
}

export default App;
