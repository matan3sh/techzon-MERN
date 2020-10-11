import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadProducts } from 'store/product/actions';

import Banner from './Banner';
import HomeProductList from './HomeProductList';

const Home = ({ products, loadProducts }) => {
  const history = useHistory();

  useEffect(() => {
    if (!products) loadProducts();
  }, [loadProducts, products]);

  return (
    <div className='home'>
      <Banner />
      <div className='home__latest'>
        <h5 onClick={() => history.push('/browse')}>All Products</h5>
      </div>
      <HomeProductList products={products} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.mainApp.products,
});
const mapDispatchToProps = {
  loadProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
