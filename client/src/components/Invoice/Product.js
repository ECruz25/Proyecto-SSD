import React, { Component } from 'react';
import styled from 'styled-components';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MaterialList from './MaterialList';

const StyledProduct = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

class Product extends Component {
  async componentDidMount() {}
  render() {
    return (
      <StyledProduct className="product">
        <p>{this.props.name}</p>
        <p>{this.props.amount}</p>
      </StyledProduct>
    );
  }
}

export default Product;
