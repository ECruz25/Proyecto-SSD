import React, { Component } from 'react';
import styled from 'styled-components';
import Material from './Material';

const StyledMaterialList = styled.div`
  width: 100%;
  margin-top: 20px;
`;

class MaterialList extends Component {
  render() {
    return (
      <StyledMaterialList className="suppliers">
        {Object.keys(this.props.materials).map(key => (
          <Material key={key} id={this.props.materials[key]} amount={this.props.materialAmount[key]} />
        ))}
      </StyledMaterialList>
    );
  }
}

export default MaterialList;
