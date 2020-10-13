import React from 'react';
import { connect } from 'react-redux';

import { Error } from 'components/shared';
import CheckoutSteps from '../shipping/CheckoutSteps';
import PlaceOrderList from './PlaceOrderList';

const PlaceOrder = ({ cartItems, shippingAddress, paymentMethod }) => {
  const getTotalPrice = () =>
    cartItems
      .reduce((acc, item) => acc + item.quantity * item.price, 0)
      .toFixed(2);

  const onPlaceOrder = () => {
    console.log('Order');
  };

  return (
    <div className='placeOrder'>
      <div className='placeOrder__container'>
        <CheckoutSteps step1 step2 step3 step4 />
        <h2>Shipping Address:</h2>
        <span>
          {shippingAddress.address}, {shippingAddress.city}{' '}
          {shippingAddress.postalCode}, {shippingAddress.country}
        </span>
        <h2>Payment Method</h2>
        <span>{paymentMethod}</span>
        <h2>Ordered Items</h2>
        {!cartItems.length ? (
          <Error error='Your cart is empty' />
        ) : (
          <>
            <PlaceOrderList cartItems={cartItems} />
            <div>
              <p>
                Shipping: <span>Free</span>
              </p>
              <p>
                Tax: <span>Free</span>
              </p>
              <p>
                Total: <span className='total-price'>${getTotalPrice()}</span>
              </p>
            </div>
          </>
        )}
        <button
          type='button'
          className='auth__signInButton'
          onClick={onPlaceOrder}
        >
          Finish
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cartApp.cartItems,
  shippingAddress: state.cartApp.shippingAddress,
  paymentMethod: state.cartApp.paymentMethod,
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PlaceOrder);
