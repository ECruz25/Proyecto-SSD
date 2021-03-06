import React, { Component } from 'react';
import styled from 'styled-components';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MaterialList from './MaterialList';

const StyledSupplier = styled.div`
  /* background-color: white; */
  /* margin: 10px; */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  /* box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);
  padding-top: 20px; */
`;

class Supplier extends Component {
  state = {
    contract: {},
    materials: {},
    expanded: null,
  };
  async componentDidMount() {
    try {
      const response = await fetch(`/suppliers/${this.props.id}/contracts`);
      const contract = await response.json();
      const response2 = await fetch(`/suppliers/${this.props.id}/materials`);
      const materials = await response2.json();
      this.setState({
        contract: contract[0],
        materialAmount: contract[0].materialList.length,
        materials,
      });
      // console.log(this.state.contract[0].materialList);
    } catch (error) {
      console.log(error);
    }
    // const response3 = await fetch('/materials');
    // const materials = await response3.json();
  }

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { expanded } = this.state;
    return (
      <ExpansionPanel
        expanded={expanded === `panel${this.props.number + 1}`}
        onChange={this.handleChange(`panel${this.props.number + 1}`)}
      >
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <StyledSupplier>
            <p>{this.props.name}</p>
            <p>
              {new Intl.NumberFormat('en', {
                style: 'currency',
                currency: 'USD',
              }).format(this.state.contract.penalty)}
            </p>
            <p>
              {new Intl.NumberFormat('en', {
                style: 'currency',
                currency: 'USD',
              }).format(this.state.contract.incompleteContract)}
            </p>
          </StyledSupplier>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={{ backgroundColor: '#E5E5E5' }}>
          <MaterialList materials={this.state.materials} days={this.state.contract.amountOfDays} />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

export default Supplier;
