import productService from 'services/productService';

export const addToCart = (id, quantity) => async (dispatch, getState) => {
  const product = await productService.getById(id);
  console.log(product);
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
