import React, { Component } from 'react';

class Product extends Component {
  state = {};
  render() {
    return (
      <div className="product">
        <p>{this.props.name}</p>
        <p>{this.props.price}</p>
        <p>{this.props.amount}</p>
      </div>
    );
  }
}

export default Product;
