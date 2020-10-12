import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadProducts } from 'store/product/actions';

import Banner from './Banner';
import HomeProductList from './HomeProductList';
import { Spinner, Error } from 'components/shared';

const Home = ({ products, loadProducts, error, loading }) => {
  const history = useHistory();

  useEffect(() => {
    if (!products) loadProducts();
  }, [loadProducts, products]);

  return (
    <div className='home'>
      <Banner />
      {loading ? (
        <Spinner />
      ) : error ? (
        <Error error={error} />
      ) : (
        <HomeProductList products={products} />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.mainApp.products,
  loading: state.mainApp.loading,
  error: state.mainApp.error,
});
const mapDispatchToProps = {
  loadProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
