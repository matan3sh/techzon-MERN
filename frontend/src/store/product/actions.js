import productService from 'services/productService';

export const loadProducts = () => async (dispatch) => {
  try {
    const products = await productService.query();
    dispatch({ type: 'SET_PRODUCTS', payload: products });
  } catch (err) {
    console.log(err);
  }
};

export const clearProducts = () => async (dispatch) => {
  try {
    dispatch({ type: 'CLEAR_PRODUCTS' });
  } catch (error) {
    console.log(error);
  }
};

export const loadProduct = (productId) => async (dispatch) => {
  try {
    const product = await productService.getById(productId);
    dispatch({ type: 'SET_PRODUCT', payload: product });
  } catch (error) {
    console.log(error);
  }
};

export const clearProduct = () => async (dispatch) => {
  try {
    dispatch({ type: 'CLEAR_PRODUCT' });
  } catch (error) {
    console.log(error);
  }
};
