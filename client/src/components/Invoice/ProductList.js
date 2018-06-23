import React, { Component } from 'react';
import styled from 'styled-components';
import Product from './Product';

const StyledProductHeader = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  color: #838383;
  h3 {
    font-size: 18px;
    font-style: bold;
  }
  background-color: white;
  border-bottom: 2px solid #c8c8c8;
  border-top: 2px solid #c8c8c8;
  padding: 13px 0;
  align-content: center;
`;

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
            materialList={this.state.products[key].materialList}
            materialAmount={this.state.products[key].materialAmount}
            className="card"
          />
        ))}
      </div>
    );
  }
}

export default ProductList;
