import productService from 'services/productService';

export const addToCart = (id, quantity) => async (dispatch, getState) => {
  const product = await productService.getById(id);
  dispatch({
    type: 'CART_ADD_ITEM',
    payload: {
      product: product._id,
      title: product.title,
      image: product.image,
      price: product.price,
      countInStock: product.countInStock,
      rating: product.rating,
      quantity,
    },
  });
  localStorage.setItem(
    'cartItems',
    JSON.stringify(getState().cartApp.cartItems)
  );
};

export const removeFromCart = (id) => async (dispatch, getState) => {
  dispatch({ type: 'CART_REMOVE_ITEM', payload: id });
  localStorage.setItem(
    'cartItems',
    JSON.stringify(getState().cartApp.cartItems)
  );
};
