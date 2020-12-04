import {
  CART_ADD_ITEM,
  DELETE_FROM_CART,
  EDIT_CART_ITEM_QTY,
  CartActionTypes,
  CartState,
} from "../types";
import axios from "axios";
import { Dispatch } from "redux";

export const onAddToCart = (productId: string, qty: number) => async (
  dispatch: Dispatch<CartActionTypes>,
  getState: () => any
) => {
  const { data } = await axios.get(`/api/products/${productId}`);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      product: data._id,
      qty,
    },
  });
  localStorage.setItem(
    "cartItems",
    JSON.stringify(getState().cartReducer.cartItems)
  );
};

export const onDeleteFromCart = (productId: string) => (
  dispatch: Dispatch<CartActionTypes>,
  getState: () => any
) => {
  dispatch({
    type: DELETE_FROM_CART,
    payload: productId,
  });
  localStorage.setItem(
    "cartItems",
    JSON.stringify(getState().cartReducer.cartItems)
  );
};

export const onEditCartItemQty = (productId: string, newQty: number) => (
  dispatch: Dispatch<CartActionTypes>,
  getState: () => any
) => {
  dispatch({
    type: EDIT_CART_ITEM_QTY,
    payload: {
      id: productId,
      newQty: newQty,
    },
  });
  localStorage.setItem(
    "cartItems",
    JSON.stringify(getState().cartReducer.cartItems)
  );
};
