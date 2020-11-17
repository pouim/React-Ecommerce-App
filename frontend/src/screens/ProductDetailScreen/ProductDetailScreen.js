import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onFetchProductDetails } from "../../store/actions/Products";
import Rating from "../../components/UI/Rating/Rating";
import MessageBox from "../../components/UI/MessageBox";
import LoadingBox from "../../components/UI/LodingBox/LoadingBox";
import Sidebar from "../../components/Sidebar/Sidebar";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import useStyles from "./styles";

const ProductDetailScreen = (props) => {
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const productDetails = useSelector((state) => state.productDetailReducer);
  const { loading, error, product } = productDetails;
  const [qty, setQty] = useState(1);

  useEffect(() => {
    dispatch(onFetchProductDetails(productId));
  }, [dispatch, productId]);


   const classes = useStyles();
  //methods
  const addToCartHandler = () => {
       props.history.push(`/cart/${productId}?qty=${qty}`);
  };

  return (
    <div className={classes.root}>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          <Grid container xs={12} spacing={6}>
            <Grid item xs={12} sm={8}>
              <Grid container spacing={3}>
                <img className={classes.image} alt={product.name} src={product.image} />
              </Grid>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Sidebar>
                <Grid item xs={12}>
                  <Typography variant="h1" component="h1">
                    {product.name}
                  </Typography>
                  <Grid style={{ marginTop: "2rem" }}>
                    <Rating
                      ratingReviews={product.numReviews}
                      ratingNumber={product.rating}
                      className={classes.item}
                    />
                    <Typography
                      className={classes.item}
                      variant="body2"
                      style={{ fontWeight: "bold" }}
                      component="p"
                    >
                      USD ${product.price}
                    </Typography>
                    <Typography
                      className={classes.item}
                      variant="body2"
                      style={{ color: "#8C8C8C" }}
                      component="p"
                    >
                      {product.countInStock > 0 ? "available" : "unavailable"}
                    </Typography>
                  </Grid>
                  <Accordion className={classes.AccordionContainer}>
                    <AccordionSummary
                      aria-label="Expand"
                      aria-controls="additional-actions1-content"
                      id="additional-actions1-header"
                    >
                      <Grid className={classes.item} xs={12}>
                        + PRODUCT DESCRIPTION
                      </Grid>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography color="textSecondary">
                        {product.description}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <ButtonGroup
                    className={classes.btnContainer}
                    variant="contained"
                    color="primary"
                    aria-label="contained primary button group"
                  >
                    <Button onClick={addToCartHandler} className={classes.button}>ADD TO BAG</Button>
                    <Button
                      className={[classes.button, classes.small].join(" ")}
                    >
                      <FavoriteBorderOutlinedIcon />
                    </Button>
                  </ButtonGroup>
                </Grid>
              </Sidebar>
            </Grid>
          </Grid>

          {/* SECTION 2 */}
          <Grid container xs={12} className={classes.sec2}>
            <Grid className={classes.sec2titleContainer} item xs={12} sm={3}>
              <Typography className={classes.sec2title} variant="h1">
                Complete the look
              </Typography>
            </Grid>

            <Grid item xs={12} sm={9}>
              <Grid container className={classes.imgContainer}>
                <img className={classes.sec2image} alt={product.name} src={product.image} />
                <img className={classes.sec2image} alt={product.name} src={product.image} />
              </Grid>
            </Grid>
          </Grid>

          {/* SECTION 3 */}
          
          <Grid container xs={12} className={classes.sec3}>
            <Grid item xl={12}><Typography style={{fontWeight: 'bold'}} variant="h2">YOU MAY ALSO LIKE</Typography></Grid>
            <Grid style={{display: 'flex', marginTop: '6rem'}} xl={12}>
                <Grid item xl={3}>
                  <img className={classes.sec3image} alt={product.name} src={product.image} />
                </Grid>
                <Grid item xl={3}>
                  <img className={classes.sec3image} alt={product.name} src={product.image} />
                </Grid>
                <Grid item xl={3}>
                  <img className={classes.sec3image} alt={product.name} src={product.image} />
                </Grid>
                <Grid item xl={3}>
                  <img className={classes.sec3image} alt={product.name} src={product.image} />
                </Grid>
            </Grid>
          </Grid>
        </>
      )}
    </div>
  );
};

export default ProductDetailScreen;
