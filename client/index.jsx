import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import ProductDetailsList from './components/ProductDetailsList.jsx';
import SearchByZipCode from './components/SearchByZipCode.jsx';
import QuantityAddToCart from './components/QuantityAddToCart.jsx'
import ProductOverview from './components/ProductOverview.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productDetails: [],
      productId: window.location.pathname,
      zipcode: ''
    }

    this.getProductDetails = this.getProductDetails.bind(this);
  }

  componentDidMount() {
    this.getProductDetails()
  }

  getProductDetails() {
    let productId = this.state.productId.split('/')[2];
    axios.get(`/product/${productId}`)
    .then((response) => {
      console.log('axios response- ', response.data);
      this.setState({ productDetails: response.data });
    })
    .catch((error) => {
      console.log('error in axios get- ', error);
    })
  }

  render() {
    return (
      <div>
        <ProductDetailsList details={this.state.productDetails} />
        <SearchByZipCode details={this.state.productDetails} />
        <QuantityAddToCart />
        <ProductOverview details={this.state.productDetails} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("addToCart"));