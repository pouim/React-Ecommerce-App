import React from 'react';


const Rating = props => {
    const { ratingNumber, ratingReviews } = props;
    return (
      <div className="rating">
        <span>
          <i
            className={
              ratingNumber >= 1
                ? "fa fa-star"
                : ratingNumber >= 0.5
                ? "fa fa-star-half-o"
                : "fa fa-star-o"
            }
          ></i>
        </span>
        <span>
          <i
            className={
              ratingNumber >= 2
                ? "fa fa-star"
                : ratingNumber >= 1.5
                ? "fa fa-star-half-o"
                : "fa fa-star-o"
            }
          ></i>
        </span>
        <span>
          <i
            className={
              ratingNumber >= 3
                ? "fa fa-star"
                : ratingNumber >= 2.5
                ? "fa fa-star-half-o"
                : "fa fa-star-o"
            }
          ></i>
        </span>
        <span>
          <i
            className={
              ratingNumber >= 4
                ? "fa fa-star"
                : ratingNumber >= 3.5
                ? "fa fa-star-half-o"
                : "fa fa-star-o"
            }
          ></i>
        </span>
        <span>
          <i
            className={
              ratingNumber >= 5
                ? "fa fa-star"
                : ratingNumber >= 4.5
                ? "fa fa-star-half-o"
                : "fa fa-star-o"
            }
          ></i>
        </span>
        <span>{ratingReviews + 'reviews'}</span>
      </div>
    );
};

export default Rating;