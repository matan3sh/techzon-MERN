import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import Banner from './Banner';
import HomeProductList from './HomeProductList';

import { products } from 'data/products';

const Home = () => {
  const history = useHistory();
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

const mapStateToProps = (state) => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
