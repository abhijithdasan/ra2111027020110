// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Card, CardContent, Typography } from '@material-ui/core';

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
        {/* Other product details */}
      </CardContent>
    </Card>
    {/* Add more product cards as needed */}
  </div>
);

const ProductDetails = ({ match }) => (
  <div>
    <h1>Product Details</h1>
    <p>Product ID: {match.params.id}</p>
    {/* Fetch product details based on ID */}
  </div>
);

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AllProducts} />
        <Route path="/product/:id" component={ProductDetails} />
      </Switch>
    </Router>
  );
}

export default App;
