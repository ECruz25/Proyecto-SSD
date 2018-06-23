import React, { Component } from 'react';
import styled from 'styled-components';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MaterialList from './MaterialList';

const StyledPurchaseOrder = styled.div`
  /* background-color: white; */
  /* margin: 10px; */
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
  /* box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);
  padding-top: 20px; */
`;

class PurchaseOrder extends Component {
  constructor() {
    super();
    this.sendOrder = this.sendOrder.bind(this);
  }
  state = { supplier: {} };
  async componentDidMount() {
    try {
      const response = await fetch(`/suppliers/${this.props.supplier}`);
      const supplier = await response.json();
      this.setState({ supplier });
    } catch (error) {
      console.log(error);
    }
  }
  async sendOrder() {
    // console.log('apreeeteee');
    try {
      await fetch(`/purchaseOrders/register/`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(this.props.purchaseOrder),
      });
      console.log(this.props.purchaseOrder);
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <StyledPurchaseOrder>
            <p>{this.state.supplier.name}</p>
            <p>{this.props.status}</p>
            <p>{this.props.materialList.length}</p>
            <p>
              {new Intl.NumberFormat('en', {
                style: 'currency',
                currency: 'USD',
              }).format(this.props.total)}
            </p>
          </StyledPurchaseOrder>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={{ backgroundColor: '#E5E5E5' }}>
          <MaterialList
            materials={this.props.materialList}
            materialAmount={this.props.materialAmount}
            sendOrder={this.sendOrder}
          />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

export default PurchaseOrder;
