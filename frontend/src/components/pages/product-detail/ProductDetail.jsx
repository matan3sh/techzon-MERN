import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadProduct, clearProduct } from 'store/product/actions';

import Rating from '@material-ui/lab/Rating';
import {
  StarBorderIcon,
  ShoppingCartIcon,
  PlayArrowIcon,
  ErrorIcon,
} from 'components/icons';
import { Spinner } from 'components/shared';
import ProductDetailMobile from './ProductDetailMobile';
import ProductDetailNav from './ProductDetailNav';

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
            <div className='productDetail__left'>
              <img src={product.image} alt={product.title} />
              <span className='productDetail__center-brand'>
                <span>Brand:</span> {product.brand}
              </span>
            </div>
            <div className='productDetail__center'>
              <h2>{product.title}</h2>
              <div className='productDetail__center-rating'>
                <Rating
                  name='read-only'
                  value={product.rating}
                  readOnly
                  precision={0.1}
                  emptyIcon={<StarBorderIcon fontSize='inherit' />}
                />
                <span className='productDetail__center-rating-length'>
                  {product.numReviews} ratings
                </span>
              </div>

              <h3>Description</h3>
              <p>{product.description}</p>
            </div>
            <div className='productDetail__right'>
              <h2>${product.price}</h2>
              <h5>No Import Fees Deposit & Free Shipping</h5>
              <p>
                {product.inStock ? (
                  <span>In Stock</span>
                ) : (
                  <span className='not-inStock'>
                    <ErrorIcon />
                    Not In Stock
                  </span>
                )}
              </p>
              <button>
                <ShoppingCartIcon />
                Add to Cart
              </button>
              <button>
                <PlayArrowIcon />
                Buy Now
              </button>
              <div>
                <small>
                  Ships from <span>Techzon</span>
                </small>
                <small>
                  Category <span>{product.category}</span>
                </small>
              </div>
            </div>
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
