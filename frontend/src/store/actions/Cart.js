import { CART_ADD_ITEM } from '../types';
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