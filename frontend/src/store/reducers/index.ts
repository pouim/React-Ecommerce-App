import { combineReducers } from 'redux';
import productReducer, { productDetailsReducer } from './Products';
import { cartReducer } from './Cart';

 const rootReducer = combineReducers({
    productReducer: productReducer,
    productDetailReducer: productDetailsReducer,
    cartReducer: cartReducer,
});



export default rootReducer;

