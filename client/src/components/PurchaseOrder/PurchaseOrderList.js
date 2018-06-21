import React, { Component } from 'react';
import styled from 'styled-components';
import PurchaseOrder from './PurchaseOrder';
import LoadingHOC from '../HOC/LoadingHOC';

class PurchaseOrderList extends Component {
  render() {
    return (
      <div className="PurchaseOrderList">
        {Object.keys(this.props.purchaseOrders).map(key => (
          <PurchaseOrder
            key={key}
            id={this.props.purchaseOrders[key]._id}
            supplier={this.props.purchaseOrders[key].supplier}
            status={this.props.purchaseOrders[key].status}
            materialList={this.props.purchaseOrders[key].materialList}
            materialAmount={this.props.purchaseOrders[key].materialAmount}
            date={this.props.purchaseOrders[key].date}
            total={this.props.purchaseOrders[key].total}
          />
        ))}
      </div>
    );
  }
}

export default LoadingHOC('purchaseOrders')(PurchaseOrderList);
