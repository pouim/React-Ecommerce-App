import { CART_ADD_ITEM, DELETE_FROM_CART, EDIT_CART_ITEM_QTY } from '../types';
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
};

export const onDeleteFromCart = (productId) => (dispatch, getState) => {
  dispatch({
    type: DELETE_FROM_CART,
    payload: productId,
  });
    localStorage.setItem('cartItems', JSON.stringify(getState().cartReducer.cartItems));
};

export const onEditCartItemQty = (productId, newQty) => (dispatch, getState) => {
  dispatch({
    type: EDIT_CART_ITEM_QTY,
    payload: {
        id: productId,
        newQty: newQty
    },
  });
  localStorage.setItem('cartItems', JSON.stringify(getState().cartReducer.cartItems));
};