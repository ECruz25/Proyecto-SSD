import React, { Component } from 'react';
import styled from 'styled-components';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MaterialList from './MaterialList';

const StyledProduct = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

class Product extends Component {
  async componentDidMount() {}
  render() {
    return (
      <ExpansionPanel>
        <ExpansionPanelSummary>
          <StyledProduct className="product">
            <p>{this.props.name}</p>
            <p>{this.props.amount}</p>
            <p>{`$ ${this.props.price}`}</p>
          </StyledProduct>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={{ backgroundColor: '#E5E5E5' }}>
          {<MaterialList materials={this.props.materialList} materialAmount={this.props.materialAmount} />}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

export default Product;
