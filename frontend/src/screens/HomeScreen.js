import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { onFetchProducts } from '../store/actions/Products';
import Product from "../components/Product/Product";
import MessageBox from "../components/MessageBox";
import LoadingBox from '../components/LoadingBox';

const HomeScreen = (props) => {
  const { error, loading, products, onFetchProducts } = props;
  
  useEffect(() => {
     onFetchProducts();
  }, [onFetchProducts]);


  return (
    <div>
      {loading? 
       <LoadingBox /> :
       error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row center">
          {products.map((product) => (
            <Product
              key={product._id}
              id={product._id}
              name={product.name}
              price={product.price}
              image={product.image}
              rating={product.rating}
              numReviews={product.numReviews}
              loading={loading}
            />
          ))}
        </div>
      )}
    </div>
  );
};


const mapDispatchToProps = dispatch => {
  return {
      onFetchProducts: () => dispatch(onFetchProducts())
  };
};

const mapStateToProps = state => {
  return {
     products: state.productReducer.products,
     loading: state.productReducer.loading,
     error: state.productReducer.error
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
