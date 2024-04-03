
import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

const ProductCard = ({ product }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          {product.productName}
        </Typography>
        <Typography color="textSecondary">
          Company: {product.company}
        </Typography>
        <Typography color="textSecondary">
          Category: {product.category}
        </Typography>
        <Typography color="textSecondary">
          Price: {product.price}
        </Typography>
        <Typography color="textSecondary">
          Rating: {product.rating}
        </Typography>
        <Typography color="textSecondary">
          Discount: {product.discount}%
        </Typography>
        <Typography color="textSecondary">
          Availability: {product.availability}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
