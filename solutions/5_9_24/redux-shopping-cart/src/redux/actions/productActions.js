// src/redux/actions/productActions.js
export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_PRODUCTS_REQUEST });
    try {
      const response = await fetch('https://api.example.com/products');
      const data = await response.json();
      dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: error });
    }
  };
};