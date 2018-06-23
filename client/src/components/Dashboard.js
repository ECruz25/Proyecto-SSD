import React, { Component } from 'react';
import styled from 'styled-components';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

import Graphs from './Graphs';

const StyledDashboard = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 10% 75%;
`;

const styledForm = styled.div`
  display: grid;
`;

class Dashboard extends Component {
  constructor() {
    super();
    this.onSupplierChange = this.onSupplierChange.bind(this);
    this.onDiagramChange = this.onDiagramChange.bind(this);
    this.onBarDiagramChange = this.onBarDiagramChange.bind(this);
  }
  state = {
    data: {},
    data2: {},
    data3: {},
    data4: {},
    selectedSupplier: '0',
    selectedDiagram: 'bar',
    selectedBarD: '1',
  };
  async componentDidMount() {
    try {
      const response = await fetch('/suppliers/contracts/getCosts');
      const data = await response.json();
      const response2 = await fetch('/purchaseOrders/getData');
      const data2 = await response2.json();
      const response3 = await fetch('/purchaseOrders/getExpiredDataByMonth');
      const data3 = await response3.json();
      const response4 = await fetch('/purchaseOrders/getMostExpiredMaterials');
      const data4 = await response4.json();
      this.setState({ data, data2, data3, data4 });
      console.log(data2);
      // this.setState({ data2 });
    } catch (error) {
      console.log(error);
    }
  }
  onSupplierChange(e) {
    this.setState({ selectedSupplier: e.target.value });
  }
  onDiagramChange(e) {
    this.setState({ selectedDiagram: e.target.value });
  }
  onBarDiagramChange(e) {
    this.setState({ selectedBarD: e.target.value });
  }
  render() {
    return (
      <StyledDashboard>
        <div
          className="options"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            justifyContent: 'space-around',
          }}
        >
          <FormControl autoComplete="off">
            <InputLabel htmlFor="type-simple">Diagrama</InputLabel>
            <Select
              onChange={this.onDiagramChange}
              name="type"
              id="type"
              value={this.state.selectedDiagram}
              inputProps={{
                name: 'type',
                id: 'type-simple',
              }}
            >
              <MenuItem value="bar">Barra</MenuItem>
              <MenuItem value="pie">Pastel</MenuItem>
              <MenuItem value="line">Linea</MenuItem>
            </Select>
          </FormControl>
          {this.state.selectedDiagram === 'bar' && (
            <FormControl autoComplete="off">
              <InputLabel htmlFor="type-simple">Diagrama</InputLabel>
              <Select
                onChange={this.onBarDiagramChange}
                name="type"
                id="type"
                value={this.state.selectedBarD}
                inputProps={{
                  name: 'type',
                  id: 'type-simple',
                }}
              >
                <MenuItem value="1">Costo de Contrato</MenuItem>
                <MenuItem value="2">Materiales mas veces vencidos </MenuItem>
              </Select>
            </FormControl>
          )}
          {this.state.selectedDiagram === 'pie' && (
            <FormControl autoComplete="off">
              <InputLabel htmlFor="supplierSelect-simple">Proveedor</InputLabel>
              <Select
                onChange={this.onSupplierChange}
                name="supplierSelect"
                id="supplierSelect"
                inputProps={{
                  name: 'supplierSelect',
                  id: 'supplierSelect-simple',
                }}
                value={this.state.selectedSupplier}
              >
                {Object.keys(this.state.data2).map(key => (
                  <MenuItem key={key} value={key}>
                    {this.state.data2[key][0].name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
          {this.state.selectedDiagram === 'line' && (
            <FormControl autoComplete="off">
              <InputLabel htmlFor="supplierSelect-simple">Proveedor</InputLabel>
              <Select
                onChange={this.onSupplierChange}
                name="supplierSelect"
                id="supplierSelect"
                inputProps={{
                  name: 'supplierSelect',
                  id: 'supplierSelect-simple',
                }}
                value={this.state.selectedSupplier}
              >
                {Object.keys(this.state.data3).map(key => (
                  <MenuItem key={key} value={key}>
                    {this.state.data3[key][0].name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
        </div>

        <Graphs
          data={
            this.state.selectedDiagram === 'bar'
              ? this.state.selectedBarD === 1
                ? this.state.data
                : this.state.data4
              : this.state.selectedDiagram === 'pie'
                ? this.state.data2[this.state.selectedSupplier]
                : this.state.data3[this.state.selectedSupplier]
          }
          type={this.state.selectedDiagram}
          bFormat={this.state.selectedBarD}
        />
      </StyledDashboard>
    );
  }
}

export default Dashboard;
