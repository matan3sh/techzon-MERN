import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';
import { StarBorderIcon } from 'components/icons';

const CheckoutPreview = ({ item }) => {
  return (
    <div className='checkoutProduct'>
      <img src={item.image} alt={item.title} />
      <div className='checkoutProduct__info'>
        <Link to={`/${item.product}`}>
          <p className='checkoutProduct__title'>{item.title}</p>
        </Link>
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
        <div className='checkoutProduct__quantity'>
          <p>Quantity:</p> <span>{item.quantity}</span>
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
