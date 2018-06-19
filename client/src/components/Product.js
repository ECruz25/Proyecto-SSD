import React, { Component } from 'react';
import styled from 'styled-components';

const StyledProduct = styled.div`
  background-color: white;
  margin: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);
  padding-top: 20px;
`;

class Product extends Component {
  componentDidMount() {
    // const materials = this.props.materials;
    // Object.keys(materials).map(key=>{
    //   for (let x = 0; x < array.length; x++) {
    //     const element = array[x];
    //   }
    //   if(materials[key]===)
    // })
  }
  render() {
    return (
      <StyledProduct className="product">
        <p>{this.props.name}</p>
        <p>{this.props.amount}</p>
        <p>{this.props.price}</p>
      </StyledProduct>
    );
  }
}

export default Product;
