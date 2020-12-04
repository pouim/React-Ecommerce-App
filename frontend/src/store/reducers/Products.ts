import {
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_SUCESS,
  FETCH_PRODUCTS_FAILED,
  FETCH_PRODUCT_DETAIL_START,
  FETCH_PRODUCT_DETAIL_SUCESS,
  FETCH_PRODUCT_DETAIL_FAILED,
  ProductActionTypes,
  ProductsState,
  ProductDetailState,
  Product
} from "../types";

const initialState: ProductsState = {
  products: [],
  error: false,
  loading: false,
};

const productReducer = (state = initialState, action: ProductActionTypes): ProductsState => {
  switch (action.type) {
    case FETCH_PRODUCTS_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PRODUCTS_SUCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case FETCH_PRODUCTS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;


const initState: ProductDetailState = {
  product: {} as Product,
  error: false,
  loading: false
}

export const productDetailsReducer = (
  state = initState,
  action: ProductActionTypes
): ProductDetailState => {
  switch (action.type) {
    case FETCH_PRODUCT_DETAIL_START:
      return { 
        ...state,
        loading: true
         };
    case FETCH_PRODUCT_DETAIL_SUCESS:
      return { 
        ...state,
        loading: false,
        product: action.payload 
        };
    case FETCH_PRODUCT_DETAIL_FAILED:
      return {
         ...state,
         loading: false,
         error: action.payload 
         };
    default:
      return state;
  }
};
