import React, { Component } from 'react';
import PurchaseOrder from './PurchaseOrder';

class PurchaseOrderList extends Component {
  async componentDidMount() {
    try {
      const response = await fetch('/purchaseOrder');
      const purchaseOrders = await response.json();
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return <PurchaseOrder />;
  }
}

export default PurchaseOrderList;
