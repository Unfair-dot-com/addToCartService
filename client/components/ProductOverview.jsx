import React from 'react';
import ShowMoreText from 'react-show-more-text';

const ProductOverview = ({ details }) => {
  return (
    <div className="overviewSection">
      {details.map((item) => (
        <div className="overview">
          <div className="title">
            <h2>Product Overview</h2>
          </div>
          <div className="MaterialSection">
            Material <br />
            {item.productMaterial.split('Material:')[1]}
          </div>

            {/* <div className="description"> */}
              <h3>Description</h3>
              <ShowMoreText
                lines={3}
                more="Show more"
                less="Show less"
                anchorClass=""
                // onClick={this.executeOnClick}
                expanded={false}
                width={600}
              >
              <div className="productDescription">{item.productDescription}</div>
            {/* </div> */}
            <div className="details">
              <h4>Product Details</h4>
              <div className="productDetails">
                <ul>
                  <li>
                    {item.productDetails}
                  </li>
                </ul>
              </div>
            </div>
            <div className="material">
              <h4>Material</h4>
              {item.productMaterial.split('Material: ').map((ele) => (
                <ul>
                  <li>{ele}</li>
                </ul>
              ))}
            </div>
          </ShowMoreText>
        </div>
      ))}
    </div>
  )
}

export default ProductOverview;