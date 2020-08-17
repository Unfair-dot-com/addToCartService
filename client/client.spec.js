import React from 'react';
import shallowRenderer from 'react-test-renderer/shallow';
import App from './index.jsx';
import ProductDetailsList from './components/ProductDetailsList.jsx';

describe('App render', () => {
  it('App should render', () => {
    shallow(<App />, document.getElementById("addToCart"));
  });

  it('Should have a header', () => {
    var wrapper = shallow(<App />);
    expect(<h1>Celestial Harmony Sun &#38 Moon Wall Décor</h1>).toEqual(true);
  });

  // const renderer = new shallowRenderer();
  // renderer.render()
})