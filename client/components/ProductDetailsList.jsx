// import React from 'react';
// import StarRatings from 'react-star-ratings';
// import Dropdown from 'react-dropdown';
// // import 'react-dropdown/styles.css';

// const ProductDetailsList = ({details}) => (
//   <div class="productDetails">
//     {details.map((product) => (
//       <div>
//         <h1>{product.productTitle}</h1>
//         <span>
//           <div>
//             <StarRatings
//               rating = {product.rating}
//               starRatedColor = "rgb(255, 163, 26)"
//               numberOfStars = {5}
//               name = "rating"
//               starDimension = "17px"
//               starSpacing = "1.5px"
//             /> &nbsp;
//             {product.rating} | {product.reviewCount} Reviews
//           </div>
//         </span>
//         <h1>${product.price}</h1>
//         <div>
//           <span>FREE Shipping</span><br />
//           <span>Get it by Mon, Aug 17</span>
//         </div>
//         <div>
//           Ship To:&nbsp;
//           <button>75063 - Irving</button>
//         </div>
//         <div>
//           <Dropdown options={[1, 2, 3, 4, 5, 6]} value={1} placeholder="1" />
//           <button></button>
//         </div>
//         <h2>Product Overview</h2>
//         <div>
//           Material<br />
//           {product.productMaterial}
//         </div>
//         <h3>Description</h3>
//         {product.productDescription}
//         <h4>Product Details</h4>
//         <span>{product.productDetails}</span>
//         <div>
//         <h4>Material</h4>
//           {product.productMaterial}
//         </div>
//       </div>
//     ))}
//     <h1></h1>
//   </div>
// );

// export default ProductDetailsList;

import React from 'react';
import StarRatings from 'react-star-ratings';
// import Dropdown from 'react-dropdown';
import weekday from 'weekday';

const ProductDetailsList = ({details}) => (
  <div class="productDetails">
    {details.map((product) => (
      <div className="details">
        <div className="title">
          <h1>{product.productTitle}</h1>
        </div>
          <div className="ratings">
            <StarRatings
              rating = {product.rating}
              starRatedColor = "rgb(255, 163, 26)"
              numberOfStars = {5}
              name = "rating"
              starDimension = "17px"
              starSpacing = "0.7px"
              svgIconPath="M6.64 10.94L3.7 12.48c-.97.52-1.6.05-1.43-1.04l.56-3.26-2.36-2.3c-.8-.78-.55-1.54.54-1.7L4.3 3.7 5.75.76c.5-1 1.28-1 1.77 0L9 3.7l3.26.48c1.1.16 1.34.92.55 1.7l-2.36 2.3.56 3.26c.2 1.1-.46 1.56-1.44 1.04l-2.92-1.54z"
              svgIconViewBox="0 0 20 13"
            /> &nbsp;
            {product.rating} | {product.reviewCount} Reviews
          </div>
        <div className="price">
          <h1>${product.price}</h1>
        </div>
        <div className="shippingDetails">
          <span>FREE Shipping</span><br />
          <span>Get it by {weekday().slice(0, 3)}, {product.randomMonth.slice(0, 3)} {product.randomDate}</span>
        </div>
      </div>
    ))}
  </div>
);

export default ProductDetailsList;