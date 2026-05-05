// src/redux/reducers/index.js
import { combineReducers } from 'redux';
import productReducer from './productReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
});

export default rootReducer;