import {
  CART_ADD_ITEM,
  DELETE_FROM_CART,
  EDIT_CART_ITEM_QTY,
  CartActionTypes,
  CartState,
} from "../types";

const initialState: CartState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems")!)
    : [],
};
export const cartReducer = (state = initialState, action: CartActionTypes): CartState => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.product === item.product);
      if (existItem) {
        const newItem = { ...existItem, qty: existItem.qty + item.qty };
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? newItem : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case DELETE_FROM_CART:
      const itemToDeleteId = action.payload;

      return {
        ...state,
        cartItems: state.cartItems.filter(
          (items) => items.product !== itemToDeleteId
        ),
      };
    // case EDIT_CART_ITEM_QTY:
    //   const itemToEdit = state.cartItems.find(
    //     (item) => item.product === action.payload.productId
    //   );
    //   const editedItem = { ...itemToEdit, qty: action.payload.newQty };
    //   return {
    //     ...state,
    //     cartItems: state.cartItems.map((item) =>
    //       item.product === editedItem.product ? editedItem : item
    //     ),
    //   };

    default:
      return state;
  }
};
