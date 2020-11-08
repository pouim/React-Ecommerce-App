import React, { useEffect, useCallback } from "react";
import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { onFetchProducts } from '../../store/actions/Products';
import Card from "../../components/Card/Card";
import Sidebar from "../../components/Sidebar/Sidebar";
import SidebarLink from '../../components/Sidebar/SidebarLink/SidebarLink';
// import MessageBox from "../components/UI/MessageBox";
// import LoadingBox from "../components/UI/LodingBox/LoadingBox";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import useStyles from './styles';
import { sidebarData } from '../../mocks';

const CatalogScreen = (props) => {
  const dispatch = useDispatch();
  const productReducer = useSelector(state => state.productReducer)
  const { error, loading, products } = productReducer;

  const fetchProductsHandler = useCallback(() => {
    dispatch(onFetchProducts());
  }, [dispatch]);

  useEffect(() => {
    fetchProductsHandler();
  }, [fetchProductsHandler]);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={3}>
           <Sidebar>
             <SidebarLink sidebarData={sidebarData} />
           </Sidebar>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Grid container spacing={3}>
            {products.map((product) => (
              <Grid item xs={12} sm={6}>
                <Card
                   alt={product.name}
                   image={product.image}
                   title={product.name}
                   name={product.name}
                   discription={product.description}
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
