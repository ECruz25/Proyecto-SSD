import React, { Component } from 'react';
import styled from 'styled-components';

const StyledMaterial = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
`;

class Material extends Component {
  state = { material: {} };
  async componentDidMount() {
    try {
      const response = await fetch(`/materials/${this.props.id}`);
      const material = await response.json();
      this.setState({ material });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <StyledMaterial>
        <p>{this.state.material.name}</p>
        <p>{this.state.material.description}</p>
        <p>{this.props.amount}</p>
        <p>
          {new Intl.NumberFormat('en', {
            style: 'currency',
            currency: 'USD',
          }).format(this.state.material.cost)}
        </p>
        <p>
          {new Intl.NumberFormat('en', {
            style: 'currency',
            currency: 'USD',
          }).format(this.state.material.cost * this.props.amount)}
        </p>
        {/* <p>{`$ ${(this.state.material.cost * this.props.amount) / 100}`}</p> */}
      </StyledMaterial>
    );
  }
}

export default Material;
