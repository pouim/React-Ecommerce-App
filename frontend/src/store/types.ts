// Product Action TYPES

export const FETCH_PRODUCTS_START = "FETCH_PRODUCTS_START";
export const FETCH_PRODUCTS_SUCESS = "FETCH_PRODUCTS_SUCESS";
export const FETCH_PRODUCTS_FAILED = "FETCH_PRODUCTS_FAILED";

export const FETCH_PRODUCT_DETAIL_START = "FETCH_PRODUCT_DETAIL_START";
export const FETCH_PRODUCT_DETAIL_SUCESS = "FETCH_PRODUCT_DETAIL_SUCESS";
export const FETCH_PRODUCT_DETAIL_FAILED = "FETCH_PRODUCT_DETAIL_FAILED";

interface fetchProductsStartAction {
  type: typeof FETCH_PRODUCTS_START;
}

interface fetchProductsSucessAction {
  type: typeof FETCH_PRODUCTS_SUCESS;
  payload: Product[];
}

interface fetchProductsFailedAction {
  type: typeof FETCH_PRODUCTS_FAILED;
  payload: string;
}

interface fetchProductDetailStartAction {
  type: typeof FETCH_PRODUCT_DETAIL_START;
  payload: string;
}

interface fetchProductDetailSucessAction {
  type: typeof FETCH_PRODUCT_DETAIL_SUCESS;
  payload: Product;
}

interface fetchProductDetailFailedAction {
  type: typeof FETCH_PRODUCT_DETAIL_FAILED;
  payload: string;
}

export type ProductActionTypes =
  | fetchProductsStartAction
  | fetchProductsSucessAction
  | fetchProductsFailedAction
  | fetchProductDetailStartAction
  | fetchProductDetailSucessAction
  | fetchProductDetailFailedAction;

// CART ACTION TYPES

export const CART_ADD_ITEM = "CART_ADD_ITEM";
export const DELETE_FROM_CART = "DELETE_FROM_CART";
export const EDIT_CART_ITEM_QTY = "EDIT_CART_ITEM_QTY";

interface onAddToCartAction {
  type: typeof CART_ADD_ITEM;
  payload: Cart;
}

interface onDeleteFromCartAction {
  type: typeof DELETE_FROM_CART;
  payload: string;
}

interface onEditCartItemQtyAction {
  type: typeof EDIT_CART_ITEM_QTY;
  payload: any;
}

export type CartActionTypes = onAddToCartAction | onDeleteFromCartAction | onEditCartItemQtyAction





//Reducer Types

export interface Product {
  _id: string;
  name: string;
  category: string;
  image: string;
  price: number;
  countInStock: number;
  brand: string;
  rating: number;
  numReviews: number;
  description: string;
}

export interface ProductsState {
  products: Product[];
  error: any;
  loading: boolean;
}

export interface ProductDetailState {
  product: Product;
  error: any;
  loading: boolean;
}

export type Cart = {
  product: string;
  name: string;
  image: string;
  price: string;
  countInStock: number;
  qty: number;
}

export interface CartState {
  cartItems: Cart[];
}
