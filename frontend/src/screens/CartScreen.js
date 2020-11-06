import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAddToCart } from "../store/actions/Cart";
import MessageBox from "../components/UI/MessageBox";
import QtySelector from "../components/UI/QtySelector/QtySelector";
import Button from "../components/UI/Button/Button";

const CartScreen = (props) => {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  const dispatch = useDispatch();
  const cartReducer = useSelector((state) => state.cartReducer);
  const { cartItems, numItems } = cartReducer;

  useEffect(() => {
    if (productId) {
      dispatch(onAddToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    //deleteFromCart //TODO
  };

  let content = (
    <div className="row top">
      <div className="col-2">
        <h1>Shopping Cart</h1>
        <ul>
          {cartItems.map((item) => (
            <li key={item.product}>
              <div className="row">
                <div>
                  <img className="small" src={item.image} alt={item.name} />
                </div>
                <div className="min-30">
                  <Link to={`/product/${item.product}`}>{item.name}</Link>
                </div>
                <div>
                  <QtySelector number={item.qty} />
                </div>
                <div>${item.price}</div>
                <div>
                  <button
                    type="button"
                    onClick={() => removeFromCartHandler(item.product)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-1">
        <div className="card card-body">
          <ul>
            <li>
              <h2>
                Subtotal ({numItems}) : $
                {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
              </h2>
            </li>
            <li>
              <Button title="Procedd To Checkout" btnType="primary" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  if (cartItems.length === 0) {
    content =  <MessageBox>Cart Is Empty!</MessageBox>
  }

  return <>{content}</>;
};

export default CartScreen;
