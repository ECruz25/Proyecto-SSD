import React, { Component } from 'react';
import styled from 'styled-components';
import Invoice from './Invoice';

const StyledInvoiceList = styled.div`
  width: 100%;
  margin-top: 20px;
`;

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

class InvoiceList extends Component {
  state = { invoices: {} };
  async componentDidMount() {
    const response = await fetch('/invoice/pending2');
    const invoices = await response.json();
    this.setState({ invoices });
  }
  render() {
    return (
      <div className="invoices">
        <StyledProductHeader>
          <h3>Cliente</h3>
          <h3>Estado</h3>
          <h3>Fecha</h3>
        </StyledProductHeader>
        <StyledInvoiceList className="invoices">
          {Object.keys(this.state.invoices).map(key => (
            <Invoice
              customer={this.state.invoices[key].customer}
              date={this.state.invoices[key].date}
              status={this.state.invoices[key].status}
              productList={this.state.invoices[key].productList}
              productAmount={this.state.invoices[key].productAmount}
              className="card"
            />
          ))}
        </StyledInvoiceList>
      </div>
    );
  }
}

export default InvoiceList;
