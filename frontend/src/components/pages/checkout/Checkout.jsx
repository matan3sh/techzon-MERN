import React from 'react';

import CheckoutList from './CheckoutList';
import Subtotal from './Subtotal';
import { products } from 'data/products';

const Checkout = () => {
  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
          alt='amazon-ad'
          className='checkout__ad'
        />
        {!products?.length ? (
          <div>
            <h2>Your Shopping Basket is Empty</h2>
            <p>
              You have no items in yout basket. To buy one or more items, click
              "Add to basket" net to the item.
            </p>
          </div>
        ) : (
          <div>
            <h2 className='checkout__title'>Your Shopping Basket</h2>
            <CheckoutList basket={products} />
          </div>
        )}
      </div>
      {products.length > 0 && (
        <div className='checkout__right'>
          <Subtotal basket={products} />
        </div>
      )}
    </div>
  );
};

export default Checkout;
