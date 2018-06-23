import React, { Component } from 'react';
import styled from 'styled-components';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ProductList from './ProductList';

const StyledInvoice = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

class Invoice extends Component {
  state = { customer: {} };
  async componentDidMount() {
    const response = await fetch(`/customer/${this.props.customer}`);
    const customer = await response.json();
    console.log(customer);
    this.setState({ customer });
  }
  render() {
    return (
      <ExpansionPanel>
        <ExpansionPanelSummary>
          <StyledInvoice className="Invoice">
            <p>{this.state.customer.name}</p>
            <p>{this.props.status}</p>
            <p>{this.props.date}</p>
          </StyledInvoice>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={{ backgroundColor: '#E5E5E5' }}>
          {<ProductList products={this.props.productList} productAmount={this.props.productAmount} />}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

export default Invoice;
