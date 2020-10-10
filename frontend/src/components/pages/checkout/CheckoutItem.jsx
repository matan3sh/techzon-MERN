import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { StarBorderIcon } from 'components/icons';

const CheckoutPreview = ({ item }) => {
  return (
    <div className='checkoutProduct'>
      <img src={item.image} alt={item.title} />
      <div className='checkoutProduct__info'>
        <p className='checkoutProduct__title'>{item.title}</p>
        <p className='checkoutProduct__price'>
          <small>$</small>
          <strong>{item.price}</strong>
        </p>

        <div className='checkoutProduct__rating'>
          <Rating
            name='read-only'
            value={item.rating}
            readOnly
            precision={0.1}
            emptyIcon={<StarBorderIcon fontSize='inherit' />}
          />
        </div>
        <div className='checkoutProduct__footer'>
          <span>Delete</span>
          <span> | </span>
          <span>Add</span>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPreview;
