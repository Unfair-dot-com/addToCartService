import React from 'react';
import image1 from '../assets/icons8-heart-26.png';
import image2 from '../assets/icons8-heart-24.png';

class QuantityAddToCart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 1,
      image: image1
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.resetImageOnEnter = this.resetImageOnEnter.bind(this);
    this.resetImageOnLeave = this.resetImageOnLeave.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleSubmit(e) {
    alert('Quantity selected- ', this.state.value);
    e.preventDefault();
  }

  handleButtonClick(e) {
    alert("Product has been added to your favorite's list");
    e.preventDefault();
  }

  resetImageOnEnter() {
    this.setState({image: image2});
  }

  resetImageOnLeave() {
    this.setState({image: image1});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <select value={this.state.value} onChange={this.handleChange}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
        </form>
        <button
          onClick={this.handleButtonClick}
          onMouseEnter={this.resetImageOnEnter}
          onMouseLeave={this.resetImageOnLeave}>
          <img src={this.state.image} />
        </button>&nbsp;&nbsp;
        <button>Add to Cart</button>
      </div>
    )
  }
}

export default QuantityAddToCart;