import React from 'react';
import Rating from '@material-ui/lab/Rating';

import {
  StarBorderIcon,
  ShoppingCartIcon,
  PlayArrowIcon,
} from 'components/icons';

const ProductDetailMobile = () => {
  return (
    <div className='productDetail__mobile'>
      <div className='productDetail__left-mobile'>
        <h2>
          Massage Gun, Muscle Therapy Gun, Hand Held Body Deep Muscle Massager
          with 30 Adjustable Speeds
        </h2>
        <div className='productDetail__center-rating mobile'>
          <Rating
            name='read-only'
            value={3.6}
            readOnly
            precision={0.1}
            emptyIcon={<StarBorderIcon fontSize='inherit' />}
          />
          <span className='productDetail__center-rating-length'>
            826 ratings
          </span>
        </div>
        <img
          src='https://images-na.ssl-images-amazon.com/images/I/71LlsIMhxEL._AC_SX679_.jpg'
          alt=''
        />
        <h3>About this item</h3>

        <p>
          Cholas massage gun can help the user relieve muscle stiffness and
          soreness, increase blood pressure, improve the overall health of the
          body's soft tissues, moreover, it can prevent fasciitis which is a
          kind of painful and difficult to heal inflammation caused by adhesion
          between the fascia and muscles.
        </p>
      </div>
      <div className='productDetail__right'>
        <h2>$48.99</h2>
        <h5>No Import Fees Deposit & Free Shipping</h5>
        <p>In Stock</p>
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
          Sold by <span>Cholasdirect</span>
        </small>
      </div>
    </div>
  );
};

export default ProductDetailMobile;
