import productService from 'services/productService';

export const loadProducts = () => async (dispatch) => {
  try {
    dispatch({ type: 'PRODUCT_LIST_REQUEST' });
    const products = await productService.query();
    dispatch({ type: 'PRODUCT_LIST_SUCCESS', payload: products });
  } catch (error) {
    dispatch({
      type: 'PRODUCT_LIST_FAIL',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const loadProduct = (productId) => async (dispatch) => {
  try {
    dispatch({ type: 'PRODUCT_DETAILS_REQUEST' });
    const product = await productService.getById(productId);
    dispatch({ type: 'PRODUCT_DETAILS_SUCCESS', payload: product });
  } catch (error) {
    dispatch({
      type: 'PRODUCT_DETAILS_FAIL',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
