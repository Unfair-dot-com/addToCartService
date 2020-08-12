import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import ProductDetailsList from './components/ProductDetailsList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productDetails: [],
      productId: window.location.pathname
    }
  }

  componentDidMount() {
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
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("addToCart"));