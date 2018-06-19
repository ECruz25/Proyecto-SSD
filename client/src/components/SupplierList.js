import React, { Component } from 'react';
import styled from 'styled-components';
import Supplier from './Supplier';

const StyledSupplierHeader = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  color: #838383;
  font-size: 24px;
  font-style: bold;
  background-color: white;
  border-bottom: 2px solid #c8c8c8;
  border-top: 2px solid #c8c8c8;
  padding: 13px 0;
  align-content: center;
`;

class SupplierList extends Component {
  state = {
    suppliers: {}
  };
  async componentDidMount() {
    const response = await fetch('/suppliers');
    const suppliers = await response.json();
    this.setState({ suppliers });
  }
  render() {
    return (
      <div className="suppliers">
        <StyledSupplierHeader>
          <h3>Nombre</h3>
          <h3>Cantidad de Materiales</h3>
          <h3>Fecha de Contrato</h3>
        </StyledSupplierHeader>
        {Object.keys(this.state.suppliers).map(key => (
          <Supplier
            key={key}
            name={this.state.suppliers[key].name}
            id={this.state.suppliers[key]._id}
            className="card"
          />
        ))}
      </div>
    );
  }
}

export default SupplierList;
