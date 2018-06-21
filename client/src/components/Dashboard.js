import React, { Component } from 'react';
import styled from 'styled-components';
import { ResponsiveBar } from '@nivo/bar';

const StyledDashboard = styled.div`
  height: 100vh;
`;

class Dashboard extends Component {
  render() {
    return (
      <StyledDashboard>
        <ResponsiveBar
          data={[
            {
              country: 'AD',
              'hot dog': 45,
              'hot dogColor': 'hsl(40, 70%, 50%)',
              burger: 117,
              burgerColor: 'hsl(126, 70%, 50%)',
              sandwich: 123,
              sandwichColor: 'hsl(233, 70%, 50%)',
              kebab: 12,
              kebabColor: 'hsl(155, 70%, 50%)',
              fries: 173,
              friesColor: 'hsl(92, 70%, 50%)',
              donut: 188,
              donutColor: 'hsl(89, 70%, 50%)',
            },
            {
              country: 'AE',
              'hot dog': 145,
              'hot dogColor': 'hsl(150, 70%, 50%)',
              burger: 178,
              burgerColor: 'hsl(35, 70%, 50%)',
              sandwich: 48,
              sandwichColor: 'hsl(74, 70%, 50%)',
              kebab: 127,
              kebabColor: 'hsl(96, 70%, 50%)',
              fries: 88,
              friesColor: 'hsl(35, 70%, 50%)',
              donut: 40,
              donutColor: 'hsl(59, 70%, 50%)',
            },
            {
              country: 'AF',
              'hot dog': 27,
              'hot dogColor': 'hsl(191, 70%, 50%)',
              burger: 35,
              burgerColor: 'hsl(354, 70%, 50%)',
              sandwich: 74,
              sandwichColor: 'hsl(259, 70%, 50%)',
              kebab: 59,
              kebabColor: 'hsl(200, 70%, 50%)',
              fries: 200,
              friesColor: 'hsl(32, 70%, 50%)',
              donut: 137,
              donutColor: 'hsl(150, 70%, 50%)',
            },
            {
              country: 'AG',
              'hot dog': 63,
              'hot dogColor': 'hsl(117, 70%, 50%)',
              burger: 3,
              burgerColor: 'hsl(338, 70%, 50%)',
              sandwich: 114,
              sandwichColor: 'hsl(271, 70%, 50%)',
              kebab: 104,
              kebabColor: 'hsl(110, 70%, 50%)',
              fries: 186,
              friesColor: 'hsl(223, 70%, 50%)',
              donut: 193,
              donutColor: 'hsl(67, 70%, 50%)',
            },
            {
              country: 'AI',
              'hot dog': 180,
              'hot dogColor': 'hsl(58, 70%, 50%)',
              burger: 168,
              burgerColor: 'hsl(325, 70%, 50%)',
              sandwich: 195,
              sandwichColor: 'hsl(200, 70%, 50%)',
              kebab: 56,
              kebabColor: 'hsl(18, 70%, 50%)',
              fries: 33,
              friesColor: 'hsl(351, 70%, 50%)',
              donut: 10,
              donutColor: 'hsl(131, 70%, 50%)',
            },
            {
              country: 'AL',
              'hot dog': 176,
              'hot dogColor': 'hsl(53, 70%, 50%)',
              burger: 132,
              burgerColor: 'hsl(306, 70%, 50%)',
              sandwich: 18,
              sandwichColor: 'hsl(96, 70%, 50%)',
              kebab: 140,
              kebabColor: 'hsl(265, 70%, 50%)',
              fries: 84,
              friesColor: 'hsl(114, 70%, 50%)',
              donut: 66,
              donutColor: 'hsl(231, 70%, 50%)',
            },
            {
              country: 'AM',
              'hot dog': 154,
              'hot dogColor': 'hsl(243, 70%, 50%)',
              burger: 73,
              burgerColor: 'hsl(118, 70%, 50%)',
              sandwich: 173,
              sandwichColor: 'hsl(49, 70%, 50%)',
              kebab: 12,
              kebabColor: 'hsl(51, 70%, 50%)',
              fries: 158,
              friesColor: 'hsl(24, 70%, 50%)',
              donut: 143,
              donutColor: 'hsl(260, 70%, 50%)',
            },
          ]}
          keys={['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut']}
          indexBy="country"
          margin={{
            top: 50,
            right: 130,
            bottom: 50,
            left: 60,
          }}
          padding={0.3}
          groupMode="grouped"
          colors="nivo"
          colorBy="id"
          defs={[
            {
              id: 'dots',
              type: 'patternDots',
              background: 'inherit',
              color: '#38bcb2',
              size: 4,
              padding: 1,
              stagger: true,
            },
            {
              id: 'lines',
              type: 'patternLines',
              background: 'inherit',
              color: '#eed312',
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
            },
          ]}
          fill={[
            {
              match: {
                id: 'fries',
              },
              id: 'dots',
            },
            {
              match: {
                id: 'sandwich',
              },
              id: 'lines',
            },
          ]}
          borderColor="inherit:darker(1.6)"
          axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'country',
            legendPosition: 'center',
            legendOffset: 36,
          }}
          axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'food',
            legendPosition: 'center',
            legendOffset: -40,
          }}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor="inherit:darker(1.6)"
          animate
          motionStiffness={90}
          motionDamping={15}
          legends={[
            {
              dataFrom: 'keys',
              anchor: 'bottom-right',
              direction: 'column',
              translateX: 120,
              itemWidth: 100,
              itemHeight: 20,
              itemsSpacing: 2,
              symbolSize: 20,
            },
          ]}
          theme={{
            tooltip: {
              container: {
                fontSize: '13px',
              },
            },
            labels: {
              textColor: '#555',
            },
          }}
        />
      </StyledDashboard>
    );
  }
}

export default Dashboard;
