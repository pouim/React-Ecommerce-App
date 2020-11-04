import { 
    FETCH_PRODUCTS_START,
    FETCH_PRODUCTS_SUCESS,
    FETCH_PRODUCTS_FAILED,
    FETCH_PRODUCT_DETAIL_START,
    FETCH_PRODUCT_DETAIL_SUCESS,
    FETCH_PRODUCT_DETAIL_FAILED } from '../types';


const initialState = {
    products: [],
    error: false,
    loading: false
};

const productReducer = (state= initialState, action) => {
    switch(action.type) {
        case FETCH_PRODUCTS_START:
            return {
                ...state,
                loading: true
            };
        case FETCH_PRODUCTS_SUCESS:
            return {
                ...state,
                loading: false,
                products: action.payload
            };
        case FETCH_PRODUCTS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            }  
        default:
            return state;         

    };
};


export default productReducer;


export const productDetailsReducer = ( state = { product: {}, loading: true }, action ) => {
        switch (action.type) {
            case FETCH_PRODUCT_DETAIL_START:
                return { loading: true };
            case FETCH_PRODUCT_DETAIL_SUCESS:
                return { loading: false, product: action.payload };
            case FETCH_PRODUCT_DETAIL_FAILED:
                return { loading: false, error: action.payload };
            default:
                return state;
        }
};