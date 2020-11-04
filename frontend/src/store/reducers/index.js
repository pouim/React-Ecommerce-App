import { combineReducers } from 'redux';
import productReducer, { productDetailsReducer } from './Products';

const rootReducer = combineReducers({
    productReducer: productReducer,
    productDetailReducer: productDetailsReducer
});

export default rootReducer;
