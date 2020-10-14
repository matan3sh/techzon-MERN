import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import productReducer from './product/reducer';
import cartReducer from './cart/reducer';
import userReducer from './user/reducer';
import orderReducer from './order/reducer';
import paypalReducer from './paypal/reducer';
import userOrdersReducer from './user-orders/reducer';
import userListReducer from './user-list/reducer';
import userDeleteReducer from './user-delete/reducer';
import userUpdateReducer from './user-update/reducer';

const rootReducer = combineReducers({
  mainApp: productReducer,
  cartApp: cartReducer,
  userApp: userReducer,
  orderApp: orderReducer,
  paypalApp: paypalReducer,
  userOrdersApp: userOrdersReducer,
  userListApp: userListReducer,
  userDeleteApp: userDeleteReducer,
  userUpdateApp: userUpdateReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
