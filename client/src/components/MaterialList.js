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
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3,1fr)',
            width: '100%',
            marginBottom: '20px',
          }}
        >
          <h7>Nombre</h7>
          <h7>Tiempo de entrega(dias)</h7>
          <h7>Costo</h7>
        </div>
        {Object.keys(this.props.materials).map(key => (
          <Material
            key={key}
            name={this.props.materials[key].name}
            cost={this.props.materials[key].cost}
            description={this.props.materials[key].description}
            days={this.props.days[key]}
          />
        ))}
      </StyledMaterialList>
    );
  }
}

export default MaterialList;
