import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadProduct, clearProduct } from 'store/product/actions';

import { Spinner } from 'components/shared';

import ProductDetailMobile from './ProductDetailMobile';
import ProductDetailNav from './ProductDetailNav';
import ProductDetailLeft from './ProductDetailLeft';
import ProductDetailCenter from './ProductDetailCenter';
import ProductDetailRight from './ProductDetailRight';

const ProductDetail = ({ match, loadProduct, clearProduct, product }) => {
  useEffect(() => {
    const { id } = match.params;
    loadProduct(id);
    return () => {
      clearProduct();
    };
    // eslint-disable-next-line
  }, [loadProduct, clearProduct]);

  return (
    <>
      {product === null ? (
        <Spinner />
      ) : (
        <>
          <ProductDetailNav />
          <ProductDetailMobile product={product} />
          <div className='productDetail'>
            <ProductDetailLeft product={product} />
            <ProductDetailCenter product={product} />
            <ProductDetailRight product={product} />
          </div>
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  product: state.mainApp.product,
});

const mapDispatchToProps = {
  loadProduct,
  clearProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
