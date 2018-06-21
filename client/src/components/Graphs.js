import React, { Component } from 'react';
import styled from 'styled-components';
import { ResponsiveBar } from '@nivo/bar';
import LoadingHOC from './HOC/LoadingHOC';

class Graphs extends Component {
  render() {
    return (
      <ResponsiveBar
        data={this.props.data}
        keys={['cantidad']}
        indexBy="supplier"
        margin={{
          top: 50,
          right: 130,
          bottom: 50,
          left: 60,
        }}
        padding={0.3}
        groupMode="grouped"
        colors="d320"
        colorBy="index"
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
              id: this.props.data[2].supplier,
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
          legend: 'Proveedor',
          legendPosition: 'center',
          legendOffset: 36,
        }}
        axisLeft={{
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Ordenes de Compra vencidas',
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
        cityPrefix
      />
    );
  }
}
export default LoadingHOC('data')(Graphs);
