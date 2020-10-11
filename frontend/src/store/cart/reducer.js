const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const initialState = {
  cartItems: cartItemsFromStorage,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'CART_ADD_ITEM':
      const item = action.payload;
      const existItem = state.cartItems.find(
        (currentItem) => currentItem.product === item.product
      );
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((currentItem) =>
            currentItem.product === existItem.product ? item : currentItem
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [item, ...state.cartItems],
        };
      }
    case 'CART_REMOVE_ITEM':
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.product !== action.payload
        ),
      };
    default:
      return state;
  }
}
