import React from 'react';

const Subtotal = ({ basket }) => {
  return (
    <div className='subtotal'>
      <h3>Subtotal ({basket.length} item): $59</h3>
      <div>
        <input type='checkbox' />
        This order contains a gift
      </div>
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
