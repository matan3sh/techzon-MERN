import React from 'react';
import { Link } from 'react-router-dom';

import Rating from '@material-ui/lab/Rating';
import {
  StarBorderIcon,
  ShoppingCartIcon,
  PlayArrowIcon,
} from 'components/icons';

import ProductDetailMobile from './ProductDetailMobile';

const ProductDetail = () => {
  return (
    <>
      <div className='productDetail__nav'>
        <h5>
          <Link to='/browse'>
            <span>Browse</span>
          </Link>
          <small>&#8702;</small> <span>Product</span>
        </h5>
      </div>
      <ProductDetailMobile />
      <div className='productDetail'>
        <div className='productDetail__left'>
          <img
            src='https://images-na.ssl-images-amazon.com/images/I/71LlsIMhxEL._AC_SX679_.jpg'
            alt=''
          />
        </div>
        <div className='productDetail__center'>
          <h2>
            Massage Gun, Muscle Therapy Gun, Hand Held Body Deep Muscle Massager
            with 30 Adjustable Speeds
          </h2>
          <div className='productDetail__center-rating'>
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
          <h3>Description</h3>
          <p>
            Cholas massage gun can help the user relieve muscle stiffness and
            soreness, increase blood pressure, improve the overall health of the
            body's soft tissues, moreover, it can prevent fasciitis which is a
            kind of painful and difficult to heal inflammation caused by
            adhesion between the fascia and muscles.
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
    </>
  );
};

export default ProductDetail;
