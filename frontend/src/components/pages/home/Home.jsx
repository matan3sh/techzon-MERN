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
        <button onClick={() => history.push('/browse')}>Browse All</button>
      </div>
      <HomeProductList products={products} />
    </div>
  );
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
