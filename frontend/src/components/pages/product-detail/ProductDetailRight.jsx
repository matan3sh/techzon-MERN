import React from 'react';
import { ShoppingCartIcon, PlayArrowIcon, ErrorIcon } from 'components/icons';
const ProductDetailRight = ({ product }) => {
  return (
    <div className='productDetail__right'>
      <h2>${product.price}</h2>
      <h5>No Import Fees Deposit & U.S Free Shipping</h5>
      <p>
        {product.inStock ? (
          <span>In Stock</span>
        ) : (
          <span className='not-inStock'>
            <ErrorIcon />
            Not In Stock
          </span>
        )}
      </p>
      <button>
        <ShoppingCartIcon />
        Add to Cart
      </button>
      <button>
        <PlayArrowIcon />
        Buy Now
      </button>
      <div className='productDetail__center-specs'>
        <p>
          &#8700; Brand: <span>{product.brand}</span>
        </p>
        <p>
          &#8700; Category: <span>{product.category}</span>
        </p>
        <p>
          &#8700; Saler: <span>matan3sh</span>
        </p>
        <p>
          &#8700; Shipes by: <span>Techzon</span>
        </p>
      </div>
    </div>
  );
};

export default ProductDetailRight;
