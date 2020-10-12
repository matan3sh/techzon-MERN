const userFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const initialState = {
  user: userFromStorage,
  loading: false,
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'USER_AUTH_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'USER_AUTH_SUCCESS':
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case 'USER_AUTH_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'USER_LOGOUT':
      return {
        ...state,
        user: {},
      };
    default:
      return state;
  }
}
