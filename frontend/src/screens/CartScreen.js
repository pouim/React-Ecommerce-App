import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAddToCart } from "../store/actions/Cart";

const CartScreen = (props) => {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(onAddToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);
  return (
    <div>
      <h1>Cart Screen</h1>
      <p>
        productId: {productId} and the qty: {qty}
      </p>
    </div>
  );
};

export default CartScreen;
