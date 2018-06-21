import React, { Component } from 'react';
import styled from 'styled-components';
import Graphs from './Graphs';

const StyledDashboard = styled.div`
  height: 100vh;
`;

class Dashboard extends Component {
  state = {
    data: {}
  };
  async componentDidMount() {
    try {
      const response = await fetch('purchaseOrders/getExpiredData');
      const data = await response.json();
      console.log(data);
      this.setState({ data });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <StyledDashboard>
        <Graphs data={this.state.data} />
      </StyledDashboard>
    );
  }
}

export default Dashboard;
