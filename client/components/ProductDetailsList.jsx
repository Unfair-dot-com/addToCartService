import React from 'react';
import StarRatings from 'react-star-ratings';
import Dropdown from 'react-dropdown';
// import 'react-dropdown/styles.css';


const ProductDetailsList = ({details}) => (
  <div class="productDetails">
    {details.map((product) => (
      <div>
        <h1>{product.productTitle}</h1>
        <span>
          <div>
            <StarRatings
              rating = {product.rating}
              starRatedColor = "rgb(255, 163, 26)"
              numberOfStars = {5}
              name = "rating"
              starDimension = "17px"
              starSpacing = "1.5px"
            /> &nbsp;
            {product.rating} | {product.reviewCount} Reviews
          </div>
        </span>
        <h1>${product.price}</h1>
        <div>
          <span>FREE Shipping</span><br />
          <span>Get it by Mon, Aug 17</span>
        </div>
        <div>
          Ship To:&nbsp;
          <button>75063 - Irving</button>
        </div>
        <div>
          <Dropdown options={[1, 2, 3, 4, 5, 6]} value={1} placeholder="1" />
          <button></button>
        </div>



        <h2>Product Overview</h2>
        <div>
          Material<br />
          {product.productMaterial}
        </div>

        <h3>Description</h3>
        {product.productDescription}

        <h4>Product Details</h4>
        <span>{product.productDetails}</span>
        <div>
        <h4>Material</h4>
          {product.productMaterial}
        </div>
      </div>





    ))}
    <h1></h1>
  </div>
);

export default ProductDetailsList;