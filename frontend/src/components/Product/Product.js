import React from "react";
// import Skeleton from "react-loading-skeleton";
import Rating from "../UI/Rating/Rating";
import { Link } from "react-router-dom";


const Product = (props) => {
  return (
    <div className="card" key={props.id}>
      <Link to={`/product/${props.id}`}>
        <img className="medium" src={props.image} alt={props.name}  />
      </Link>
      <div className="card-body">
        <Link to={`/product/${props.id}`}>
          <h2>{props.name}</h2>
        </Link>
        <Rating ratingNumber={props.rating} ratingReviews={props.numReviews} />
        <div className="price">{props.price}</div>
      </div>
    </div>
  );
  
};

export default Product;
