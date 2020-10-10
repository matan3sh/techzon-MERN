import React from 'react';
import { Link } from 'react-router-dom';

import Rating from '@material-ui/lab/Rating';
import { StarBorderIcon } from 'components/icons';

const HomeProductItem = ({ product }) => {
  return (
    <div className='product'>
      <Link to={`/${product._id}`}>
        <div className='product__info'>
          <h2>{product.title}</h2>
          <p className='product__price'>
            <small>$</small>
            <strong>{product.price}</strong>
          </p>
          <div className='product__rating'>
            <Rating
              name='read-only'
              value={product.rating}
              readOnly
              precision={0.1}
              emptyIcon={<StarBorderIcon fontSize='inherit' />}
            />
            <span className='product__numReviews'>{product.numReviews}</span>
          </div>
        </div>
        <img src={product.image} alt={product.title} />
      </Link>
      <button className='button' onClick={() => console.log('Add')}>
        Add to Cart
      </button>
    </div>
  );
};

export default HomeProductItem;
