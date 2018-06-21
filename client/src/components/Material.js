import React, { Component } from 'react';
import styled from 'styled-components';

const StyledMaterial = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
`;

class Material extends Component {
  render() {
    return (
      <StyledMaterial>
        <p>{this.props.name}</p>
        <p>{this.props.description}</p>
        <p>{`$ ${this.props.cost / 100}`}</p>
      </StyledMaterial>
    );
  }
}

export default Material;
