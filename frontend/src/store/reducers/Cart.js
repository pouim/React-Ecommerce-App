import { CART_ADD_ITEM, DELETE_FROM_CART } from '../types';

const initialState = {
    cartItems: localStorage.getItem('cartItems')
               ? JSON.parse(localStorage.getItem('cartItems'))
               : [],
    numItems: localStorage.getItem('numItems')
               ? JSON.parse(localStorage.getItem('numItems'))
               : 0,
}
export const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case CART_ADD_ITEM:
          const item = action.payload;
          const existItem = state.cartItems.find(x => x.product === item.product);
        if(existItem) {
            const newItem = {...existItem, qty: existItem.qty + item.qty };
            return {
                ...state,
                cartItems: state.cartItems.map(x => 
                x.product === existItem.product ? newItem : x
                ),
                numItems: state.numItems + item.qty
            }
        } else {
            return {
                ...state,
                cartItems: [...state.cartItems, item],
                numItems: state.numItems + item.qty
            };
        };
        case DELETE_FROM_CART: 
            const itemToDeleteId = action.payload;
            return {
                ...state,
                cartItems: state.cartItems.filter(items => items.product !== itemToDeleteId)
            };
        
        default: 
          return state;   
    }
};