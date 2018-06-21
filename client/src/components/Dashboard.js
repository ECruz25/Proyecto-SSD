import React, { Component } from 'react';
import styled from 'styled-components';
import Graphs from './Graphs';

const StyledDashboard = styled.div`
  height: 100vh;
`;

class Dashboard extends Component {
  state = {
    data: {},
    data2: {},
  };
  async componentDidMount() {
    try {
      const response = await fetch('/suppliers/contracts/getCosts');
      const data = await response.json();
      const response2 = await fetch('/purchaseOrders/getData');
      const data2 = await response2.json();
      this.setState({ data, data2 });
      console.log(data2);
      // this.setState({ data2 });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <StyledDashboard>
        {/* <Graphs data2={this.state.data2} /> */}
        <Graphs
          data={this.state.data}
          data2={this.state.data2[0]}
          data3={this.state.data2[3]}
          data4={this.state.data2[2]}
        />
      </StyledDashboard>
    );
  }
}

export default Dashboard;
