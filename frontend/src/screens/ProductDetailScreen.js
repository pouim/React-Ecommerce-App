import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onFetchProductDetails } from "../store/actions/Products";
import { Link } from "react-router-dom";
import Rating from "../components/UI/Rating/Rating";
import MessageBox from "../components/UI/MessageBox";
import LoadingBox from "../components/UI/LodingBox/LoadingBox";
import Button from '../components/UI/Button/Button';

const ProductDetailScreen = (props) => {
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const productDetails = useSelector((state) => state.productDetailReducer);
  const { loading, error, product } = productDetails;
  const [qty, setQty] = useState(1);

  useEffect(() => {
    dispatch(onFetchProductDetails(productId));
  }, [dispatch, productId]);



  //methods
  const addToCartHandler = () => {
       props.history.push(`/cart/${productId}?qty=${qty}`);
  };

  return (
    <div>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <React.Fragment>
          <Link to="/">Back to result</Link>
          <div className="row top">
            <div className="col-2">
              <img className="large" src={product.image} alt={product.name} />
            </div>
            <div className="col-1">
              <ul>
                <li>
                  <h1>{product.name}</h1>
                </li>
                <li>
                  <Rating
                    ratingNumber={product.rating}
                    ratingReviews={product.numReviews}
                  />
                </li>
                <li className="price">Price : $ {product.price}</li>
                <li className="price">
                  Description:
                  <p>{product.description}</p>
                </li>
              </ul>
            </div>
            <div className="col-1">
              <div className="card card-body">
                <ul>
                  <li>
                    <div className="row">
                      <div>Price</div>
                      <div className="price">${product.price}</div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div>Status</div>
                      <div>
                        {product.countInStock > 0 ? (
                          <span className="success">In Stock</span>
                        ) : (
                          <span className="danger">Unavailable</span>
                        )}
                      </div>
                    </div>
                  </li>
                  {product.countInStock > 0 && (
                    <>
                      <li>
                        <div className="row">
                          <div>QTY</div>
                          <div>
                            <select
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                            >
                              {[...Array(product.countInStock).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>{x + 1}</option>
                                )
                              )}
                            </select>
                          </div>
                        </div>
                      </li>
                      <li>
                        <Button onClick={addToCartHandler} title="Add To Cart" btnType="primary" />
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default ProductDetailScreen;
