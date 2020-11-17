import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAddToCart } from "../../store/actions/Cart";
import useStyles from "./styles";
import MessageBox from "../../components/UI/MessageBox";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from '../../components/UI/Button/Button';
import CartItem from '../../components/CartItem/CartItem';

const CartScreen = (props) => {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  const dispatch = useDispatch();
  const cartReducer = useSelector((state) => state.cartReducer);
  const { cartItems, numItems } = cartReducer;
  const classes = useStyles();

  useEffect(() => {
    if (productId) {
      dispatch(onAddToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    //deleteFromCart //TODO
  };

  let content = (
    <>
      <Grid className={classes.cartContainer} container xs={12}>
        <Grid className={classes.headerContainer}>
          <Typography style={{ marginRight: "1rem" }} variant="h2">
            Bag
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {cartItems.length} items
          </Typography>
        </Grid>
        {cartItems.map((item) => (
          <CartItem
            image={item.image}
            title={item.name}
            price={item.price}
            qty={item.qty}
            countInStock={item.countInStock}
          />
        ))}
        <Grid style={{ textAlign: "center", marginTop: "1rem" }} item xs={12}>
          <Typography variant="h6" component="h6">
            Total USD ${cartItems.reduce((acc, curr) => acc + (curr.price * curr.qty), 0)}
          </Typography>
          <Button style={{padding: '0.5rem 2rem'}}>
            PROCEED TO CHECKOUT
          </Button>
        </Grid>
      </Grid>
    </>
  );

  if (cartItems.length === 0) {
    content =  <MessageBox>Cart Is Empty!</MessageBox>
  }
  console.log(cartItems);
  return <div className={classes.root}>{content}</div>;
};

export default CartScreen;
