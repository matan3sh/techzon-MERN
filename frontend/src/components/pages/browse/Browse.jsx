import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadProducts } from 'store/product/actions';

import { Spinner, Error } from 'components/shared';
import BrowseList from './BrowseList';

const Browse = ({ products, loadProducts, error, loading }) => {
  useEffect(() => {
    if (!products) loadProducts();
  }, [loadProducts, products]);

  return (
    <div>
      <div className='browse__header'>
        <p>
          1-16 of 896 results for <span>"USB TYPE C"</span>
        </p>
      </div>
      {loading ? (
        <Spinner />
      ) : error ? (
        <Error error={error} />
      ) : (
        <BrowseList products={products} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Browse);
