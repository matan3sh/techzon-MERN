import React from 'react';
import Rating from '@material-ui/lab/Rating';

import {
  StarBorderIcon,
  ShoppingCartIcon,
  PlayArrowIcon,
  ErrorIcon,
} from 'components/icons';

const ProductDetailMobile = ({ product }) => {
  return (
    <div className='productDetail__mobile'>
      <div className='productDetail__left-mobile'>
        <h2>{product.title}</h2>
        <div className='productDetail__center-rating mobile'>
          <Rating
            name='read-only'
            value={product.rating}
            readOnly
            precision={0.1}
            emptyIcon={<StarBorderIcon fontSize='inherit' />}
          />
          <span className='productDetail__center-rating-length'>
            {product.numReviews} ratings
          </span>
        </div>
        <img src={product.image} alt={product.title} />
        <h3>About this item</h3>
        <p>{product.description}</p>
      </div>
      <div className='productDetail__right'>
        <h2>${product.price}</h2>
        <h5>No Import Fees Deposit & Free Shipping</h5>
        <p>
          {product.inStock ? (
            <span>In Stock</span>
          ) : (
            <span className='not-inStock'>
              <ErrorIcon />
              Not In Stock
            </span>
          )}
        </p>{' '}
        <button>
          <ShoppingCartIcon />
          Add to Cart
        </button>
        <button>
          <PlayArrowIcon />
          Buy Now
        </button>
        <small>
          Ships from <span>Techzon</span>
        </small>
        <small>
          Category <span>{product.category}</span>
        </small>
        <small>
          Brand <span>{product.brand}</span>
        </small>
      </div>
    </div>
  );
};

export default ProductDetailMobile;
