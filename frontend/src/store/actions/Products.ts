import { 
    FETCH_PRODUCTS_START,
    FETCH_PRODUCTS_SUCESS,
    FETCH_PRODUCTS_FAILED,
    FETCH_PRODUCT_DETAIL_START,
    FETCH_PRODUCT_DETAIL_SUCESS,
    FETCH_PRODUCT_DETAIL_FAILED, ProductActionTypes, Product } from '../types';
import axios from 'axios';
import { Dispatch } from 'redux';

// fetchProducts

export const fetchProductsStart = () : ProductActionTypes => {
    return {
        type: FETCH_PRODUCTS_START
    };
};

export const fetchProductsFailed = (error: string): ProductActionTypes => {
    return {
        type: FETCH_PRODUCTS_FAILED,
        payload: error
    };
};


export const fetchProductsSucess = (products: Product[]): ProductActionTypes => {
    return {
        type: FETCH_PRODUCTS_SUCESS,
        payload: products
    };
};

export const onFetchProducts = () => {
    return (dispatch: Dispatch<ProductActionTypes>) => {
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


export const fetchProductDetailStart = (productId: string): ProductActionTypes => {
    return {
        type: FETCH_PRODUCT_DETAIL_START,
        payload: productId
    };
};

export const fetchProductDetailSucess = (data: Product): ProductActionTypes => {
    return {
        type: FETCH_PRODUCT_DETAIL_SUCESS,
        payload: data
    };
};

export const fetchProductDetailFailed = (error: any): ProductActionTypes => {
    return {
        type: FETCH_PRODUCT_DETAIL_FAILED,
        payload:
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
    };
};

export const onFetchProductDetails = (productId: string) => async (
  dispatch: Dispatch<ProductActionTypes>
) => {
  dispatch(fetchProductDetailStart(productId));
  try {
    const { data } = await axios.get(`/api/products/${productId}`);
    dispatch(fetchProductDetailSucess(data));
  } catch (error) {
    dispatch(fetchProductDetailFailed(error));
  }
};