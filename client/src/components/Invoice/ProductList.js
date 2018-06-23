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
  render() {
    return (
      <div className="products">
        {Object.keys(this.props.products).map(key => (
          <Product
            key={key}
            name={this.props.products[key].name}
            price={this.props.products[key].price}
            amount={this.props.products[key].amount}
            materialList={this.props.products[key].materialList}
            materialAmount={this.props.products[key].materialAmount}
            className="card"
          />
        ))}
      </div>
    );
  }
}

export default ProductList;
