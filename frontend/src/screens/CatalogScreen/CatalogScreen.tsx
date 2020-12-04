import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onFetchProducts } from "../../store/actions/Products";
import Card from "../../components/Card/Card";
import Sidebar from "../../components/Sidebar/Sidebar";
// import SidebarDrawer from '../../components/Sidebar/SidebarDrawer/SidebarDrawer';
import SidebarLink from "../../components/Sidebar/SidebarLink/SidebarLink";
// import MessageBox from "../components/UI/MessageBox";
// import LoadingBox from "../components/UI/LodingBox/LoadingBox";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import useStyles from "./styles";
import { sidebarData } from "../../mocks";
import { RootState } from '../../store/store';




interface CatalogScreenProps {
  history: any;
  
}

const CatalogScreen: React.FC<CatalogScreenProps> = (props) => {
  const dispatch = useDispatch();
  const productReducer = useSelector((state: RootState) => state.productReducer);
  const { error, loading, products } = productReducer;

  const fetchProductsHandler = useCallback(() => {
    dispatch(onFetchProducts());
  }, [dispatch]);

  useEffect(() => {
    fetchProductsHandler();
  }, [fetchProductsHandler]);
  const classes = useStyles();

  const goToProductDetailsHandler = (id: string) => {
      props.history.push(`/product/${+id}`);
  };
  return (
    <div className={classes.root}>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={3}>
          <Hidden only={["sm", "xs"]}>
            <Sidebar>
              <SidebarLink sidebarData={sidebarData} />
            </Sidebar>
          </Hidden>
          {/* <SidebarDrawer /> */}
        </Grid>

        <Grid item xs={12} sm={9}>
          <Grid container spacing={3}>
            {products.map((product) => (
              <Grid item xs={12} sm={6}>
                <Card
                  onClick={() => goToProductDetailsHandler(product._id)}
                  alt={product.name}
                  image={product.image}
                  title={product.name}
                  name={product.name}
                  ratingNumber={product.rating}
                  numReviews={product.numReviews}
                  price={product.price}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default CatalogScreen;
