import { CART_ADD_ITEM, DELETE_FROM_CART } from '../types';
import axios from 'axios';



export const onAddToCart = (productId, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/products/${productId}`);
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            product: data._id,
            qty
        },
    });
    localStorage.setItem('cartItems', JSON.stringify(getState().cartReducer.cartItems));
    localStorage.setItem('numItems', JSON.stringify(getState().cartReducer.numItems));
};

export const onDeleteFromCart = (productId) => (dispatch, getState) => {
  dispatch({
    type: DELETE_FROM_CART,
    payload: productId,
  });
    localStorage.setItem('cartItems', JSON.stringify(getState().cartReducer.cartItems));
    localStorage.setItem('numItems', JSON.stringify(getState().cartReducer.numItems));
};