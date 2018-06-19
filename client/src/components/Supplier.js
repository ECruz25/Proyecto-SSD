import React, { Component } from 'react';
import styled from 'styled-components';

const StyledSupplier = styled.div`
  background-color: white;
  margin: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);
  padding-top: 20px;
`;

class Supplier extends Component {
  state = { contract: {} };
  async componentDidMount() {
    try {
      const response = await fetch(`/suppliers/${this.props.id}/contracts`);
      const contract = await response.json();
      console.log(contract);
      // const response2 = await fetch(`/suppliers/${this.props.id}/materials`);
      // const materials = await response2.json();
      this.setState({ contract });
      // console.log(this.state.contract[0].materialList);
    } catch (error) {
      console.log(error);
    }
    // const response3 = await fetch('/materials');
    // const materials = await response3.json();
  }
  render() {
    return (
      <StyledSupplier className="supplier">
        <p>{this.props.name}</p>
      </StyledSupplier>
    );
  }
}

export default Supplier;
