import { 
    FETCH_PRODUCTS_START,
    FETCH_PRODUCTS_SUCESS,
    FETCH_PRODUCTS_FAILED,
    FETCH_PRODUCT_DETAIL_START,
    FETCH_PRODUCT_DETAIL_SUCESS,
    FETCH_PRODUCT_DETAIL_FAILED } from '../types';
import axios from 'axios';

// fetchProducts

export const fetchProductsStart = () => {
    return {
        type: FETCH_PRODUCTS_START
    };
};

export const fetchProductsFailed = (error) => {
    return {
        type: FETCH_PRODUCTS_FAILED,
        payload: error
    };
};


export const fetchProductsSucess = (products) => {
    return {
        type: FETCH_PRODUCTS_SUCESS,
        payload: products
    };
};

export const onFetchProducts = () => {
    return dispatch => {
        dispatch(fetchProductsStart());
        axios.get('/api/products')
             .then(res => { 
                dispatch(fetchProductsSucess(res.data));
             })
             .catch(err => {
                 dispatch(fetchProductsFailed(err.message));
             });
    };
};

// fetchProductsDetail


export const onFetchProductDetails = (productId) => async (dispatch) => {
        dispatch({ type: FETCH_PRODUCT_DETAIL_START, payload: productId });
        try {
            const { data } = await axios.get(`/api/products/${productId}`);
            dispatch({ type: FETCH_PRODUCT_DETAIL_SUCESS, payload: data });
        } catch (error) {
            dispatch({
            type: FETCH_PRODUCT_DETAIL_FAILED,
            payload:
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
            });
        }
};