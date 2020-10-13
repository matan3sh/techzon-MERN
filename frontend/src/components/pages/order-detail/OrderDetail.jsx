import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getOrderDetails } from 'store/order/actions';

import { Spinner, Error } from 'components/shared';
import OrderDetailList from './OrderDetailList';
import OrderDetailShipping from './OrderDetailShipping';
import OrderDetailPayment from './OrderDetailPayment';
import OrderDetailSummary from './OrderDetailSummary';

const OrderDetail = ({
  match,
  getOrderDetails,
  orderDetails,
  error,
  loading,
}) => {
  const orderId = match.params.id;

  useEffect(() => {
    if (!orderDetails || orderDetails._id !== orderId) getOrderDetails(orderId);
    // eslint-disable-next-line
  }, [orderDetails, orderId]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : error ? (
        <Error error={error} />
      ) : (
        <div className='orderDetail'>
          <div className='orderDetail__left'>
            <h2>CONFIRM ID {orderDetails._id}</h2>
            <div className='orderDetail__left-container'>
              <OrderDetailShipping orderDetails={orderDetails} />
              <OrderDetailPayment orderDetails={orderDetails} />
              {orderDetails.orderItems.length === 0 ? (
                <Error error='Order is empty' />
              ) : (
                <OrderDetailList items={orderDetails?.orderItems} />
              )}
            </div>
          </div>
          <div className='orderDetail__right'>
            <OrderDetailSummary orderDetails={orderDetails} />
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  orderDetails: state.orderApp.orderDetails,
  loading: state.orderApp.loading,
  error: state.orderApp.error,
});
const mapDispatchToProps = {
  getOrderDetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetail);
