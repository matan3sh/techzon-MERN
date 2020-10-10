import React from 'react';
import { Link } from 'react-router-dom';

import Rating from '@material-ui/lab/Rating';
import {
  StarBorderIcon,
  LocalShippingIcon,
  DirectionsRunIcon,
} from 'components/icons';

const BrowseItem = ({ product }) => {
  return (
    <div className='browseItem'>
      <img src={product.image} alt={product.title} />
      <div>
        <Link to={`/${product._id}`}>
          <h2>{product.title}</h2>
          <div className='browseItem__rating'>
            <Rating
              name='read-only'
              value={product.rating}
              readOnly
              precision={0.1}
              emptyIcon={<StarBorderIcon fontSize='inherit' />}
            />
            <span className='browseItem__rating-length'> 219</span>
          </div>
          <p className='browseItem__price'>
            $<span>{product.price}</span>
          </p>
          <div className='browseItem__free-shipping'>
            <div>
              <LocalShippingIcon /> <span>Free Shipping</span>
            </div>
            <div>
              <DirectionsRunIcon /> <span>Fast Delivery</span>
            </div>
          </div>
        </Link>
        <button className='button'>Add to Cart</button>
      </div>
    </div>
  );
};

export default BrowseItem;
