import React, { Component } from 'react';
import Product from './Product';

class ProductList extends Component {
  state = { products: {} };
  async componentDidMount() {
    const response = await fetch('/products');
    const products = await response.json();
    this.setState({ products });
  }
  render() {
    return (
      <div className="products">
        {Object.keys(this.state.products).map(key => (
          <Product
            key={key}
            name={this.state.products[key].name}
            price={this.state.products[key].price}
            amount={this.state.products[key].amount}
          />
        ))}
      </div>
    );
  }
}

export default ProductList;
