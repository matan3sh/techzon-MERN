const initialState = {
  products: null,
  product: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return {
        ...state,
        products: action.payload,
      };
    case 'CLEAR_PRODUCTS':
      return {
        ...state,
        products: null,
      };
    case 'SET_PRODUCT':
      return {
        ...state,
        product: action.payload,
      };
    case 'CLEAR_PRODUCT':
      return {
        ...state,
        product: null,
      };
    default:
      return state;
  }
}
