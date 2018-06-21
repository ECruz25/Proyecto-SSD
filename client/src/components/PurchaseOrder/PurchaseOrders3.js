import React, { Component } from 'react';
import styled from 'styled-components';
import PurchaseOrderList from './PurchaseOrderList';

const StyledSupplierHeader = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  color: #838383;
  font-size: 24px;
  font-style: bold;
  background-color: white;
  border-bottom: 2px solid #c8c8c8;
  border-top: 2px solid #c8c8c8;
  padding: 13px 0;
  align-content: center;
`;

class PurchaseOrders extends Component {
  state = {
    purchaseOrders: {},
  };
  async componentDidMount() {
    try {
      if (this.props.location.pathname === '/ordenes/planeacion') {
        const response = await fetch('/purchaseOrders/plan');
        const purchaseOrders = await response.json();
        this.setState({ purchaseOrders });
      } else if (this.props.location.pathname === '/ordenes/vencidas') {
        const response = await fetch('/purchaseOrders/expired');
        const purchaseOrders = await response.json();
        this.setState({ purchaseOrders });
      } else if (this.props.location.pathname === '/ordenes/abiertas') {
        const response = await fetch('/purchaseOrders/open');
        const purchaseOrders = await response.json();
        this.setState({ purchaseOrders });
      }
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <div className="PurchaseOrders">
        <StyledSupplierHeader>
          <h3>Proveedor</h3>
          <h3>Estado</h3>
          <h3>Cantidad de Items</h3>
          <h3>Total: {Object.keys(this.state.purchaseOrders).length}</h3>
          <h3>Opciones</h3>
        </StyledSupplierHeader>
        <PurchaseOrderList purchaseOrders={this.state.purchaseOrders} />
      </div>
    );
  }
}

export default PurchaseOrders;
