import React, { Component } from 'react';
import styled from 'styled-components';
import { ResponsiveBar } from '@nivo/bar';
import { ResponsivePie } from '@nivo/pie';
import LoadingHOC from './HOC/LoadingHOC';

class Graphs extends Component {
  render() {
    return (
      <div className="graphs" style={{ height: '100vh' }}>
        <ResponsiveBar
          data={this.props.data}
          keys={['cantidad', 'penalidad']}
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
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3,1fr)',
          }}
        >
          <div
            style={{
              width: '25vw',
              height: '50vh',
            }}
          >
            {this.props.data2[0].name}
            <ResponsivePie
              data={[
                {
                  id: this.props.data2[0].id,
                  label: this.props.data2[0].label,
                  value: this.props.data2[0].value,
                  color: 'hsl(248, 70%, 50%)',
                },
                {
                  id: this.props.data2[1].id,
                  label: this.props.data2[1].label,
                  value: this.props.data2[1].value,
                  color: 'hsl(248, 70%, 50%)',
                },
              ]}
              margin={{
                top: 40,
                right: 80,
                bottom: 80,
                left: 80,
              }}
              innerRadius={0.5}
              padAngle={0.7}
              cornerRadius={3}
              colors="nivo"
              colorBy="id"
              borderWidth={1}
              borderColor="inherit:darker(0.2)"
              radialLabelsSkipAngle={10}
              radialLabelsTextXOffset={6}
              radialLabelsTextColor="#333333"
              radialLabelsLinkOffset={0}
              radialLabelsLinkDiagonalLength={16}
              radialLabelsLinkHorizontalLength={24}
              radialLabelsLinkStrokeWidth={1}
              radialLabelsLinkColor="inherit"
              slicesLabelsSkipAngle={10}
              slicesLabelsTextColor="#333333"
              animate
              motionStiffness={90}
              motionDamping={15}
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
              defs={[
                {
                  id: 'dots',
                  type: 'patternDots',
                  background: 'inherit',
                  color: 'rgba(255, 255, 255, 0.3)',
                  size: 4,
                  padding: 1,
                  stagger: true,
                },
                {
                  id: 'lines',
                  type: 'patternLines',
                  background: 'inherit',
                  color: 'rgba(255, 255, 255, 0.3)',
                  rotation: -45,
                  lineWidth: 6,
                  spacing: 10,
                },
              ]}
              fill={[
                {
                  match: {
                    id: 'ruby',
                  },
                  id: 'dots',
                },
                {
                  match: {
                    id: 'c',
                  },
                  id: 'dots',
                },
                {
                  match: {
                    id: 'go',
                  },
                  id: 'dots',
                },
                {
                  match: {
                    id: 'python',
                  },
                  id: 'dots',
                },
                {
                  match: {
                    id: 'scala',
                  },
                  id: 'lines',
                },
                {
                  match: {
                    id: 'lisp',
                  },
                  id: 'lines',
                },
                {
                  match: {
                    id: 'elixir',
                  },
                  id: 'lines',
                },
                {
                  match: {
                    id: 'javascript',
                  },
                  id: 'lines',
                },
              ]}
              legends={[
                {
                  anchor: 'bottom',
                  direction: 'row',
                  translateY: 56,
                  itemWidth: 100,
                  itemHeight: 18,
                  symbolSize: 18,
                  symbolShape: 'circle',
                },
              ]}
            />
          </div>
          <div style={{ width: '25vw', height: '50vh' }}>
            {this.props.data3[0].name}
            <ResponsivePie
              data={[
                {
                  id: this.props.data3[0].id,
                  label: this.props.data3[0].label,
                  value: this.props.data3[0].value,
                  color: 'hsl(248, 70%, 50%)',
                },
                {
                  id: this.props.data3[1].id,
                  label: this.props.data3[1].label,
                  value: this.props.data3[1].value,
                  color: 'hsl(248, 70%, 50%)',
                },
              ]}
              margin={{
                top: 40,
                right: 80,
                bottom: 80,
                left: 80,
              }}
              innerRadius={0.5}
              padAngle={0.7}
              cornerRadius={3}
              colors="nivo"
              colorBy="id"
              borderWidth={1}
              borderColor="inherit:darker(0.2)"
              radialLabelsSkipAngle={10}
              radialLabelsTextXOffset={6}
              radialLabelsTextColor="#333333"
              radialLabelsLinkOffset={0}
              radialLabelsLinkDiagonalLength={16}
              radialLabelsLinkHorizontalLength={24}
              radialLabelsLinkStrokeWidth={1}
              radialLabelsLinkColor="inherit"
              slicesLabelsSkipAngle={10}
              slicesLabelsTextColor="#333333"
              animate
              motionStiffness={90}
              motionDamping={15}
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
              defs={[
                {
                  id: 'dots',
                  type: 'patternDots',
                  background: 'inherit',
                  color: 'rgba(255, 255, 255, 0.3)',
                  size: 4,
                  padding: 1,
                  stagger: true,
                },
                {
                  id: 'lines',
                  type: 'patternLines',
                  background: 'inherit',
                  color: 'rgba(255, 255, 255, 0.3)',
                  rotation: -45,
                  lineWidth: 6,
                  spacing: 10,
                },
              ]}
              fill={[
                {
                  match: {
                    id: 'ruby',
                  },
                  id: 'dots',
                },
                {
                  match: {
                    id: 'c',
                  },
                  id: 'dots',
                },
                {
                  match: {
                    id: 'go',
                  },
                  id: 'dots',
                },
                {
                  match: {
                    id: 'python',
                  },
                  id: 'dots',
                },
                {
                  match: {
                    id: 'scala',
                  },
                  id: 'lines',
                },
                {
                  match: {
                    id: 'lisp',
                  },
                  id: 'lines',
                },
                {
                  match: {
                    id: 'elixir',
                  },
                  id: 'lines',
                },
                {
                  match: {
                    id: 'javascript',
                  },
                  id: 'lines',
                },
              ]}
              legends={[
                {
                  anchor: 'bottom',
                  direction: 'row',
                  translateY: 56,
                  itemWidth: 100,
                  itemHeight: 18,
                  symbolSize: 18,
                  symbolShape: 'circle',
                },
              ]}
            />
          </div>
          <div style={{ width: '25vw', height: '50vh' }}>
            {this.props.data4[0].name}
            <ResponsivePie
              data={[
                {
                  id: this.props.data4[0].id,
                  label: this.props.data4[0].label,
                  value: this.props.data4[0].value,
                  color: 'hsl(248, 70%, 50%)',
                },
                {
                  id: this.props.data4[1].id,
                  label: this.props.data4[1].label,
                  value: this.props.data4[1].value,
                  color: 'hsl(248, 70%, 50%)',
                },
              ]}
              margin={{
                top: 40,
                right: 80,
                bottom: 80,
                left: 80,
              }}
              innerRadius={0.5}
              padAngle={0.7}
              cornerRadius={3}
              colors="nivo"
              colorBy="id"
              borderWidth={1}
              borderColor="inherit:darker(0.2)"
              radialLabelsSkipAngle={10}
              radialLabelsTextXOffset={6}
              radialLabelsTextColor="#333333"
              radialLabelsLinkOffset={0}
              radialLabelsLinkDiagonalLength={16}
              radialLabelsLinkHorizontalLength={24}
              radialLabelsLinkStrokeWidth={1}
              radialLabelsLinkColor="inherit"
              slicesLabelsSkipAngle={10}
              slicesLabelsTextColor="#333333"
              animate
              motionStiffness={90}
              motionDamping={15}
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
              defs={[
                {
                  id: 'dots',
                  type: 'patternDots',
                  background: 'inherit',
                  color: 'rgba(255, 255, 255, 0.3)',
                  size: 4,
                  padding: 1,
                  stagger: true,
                },
                {
                  id: 'lines',
                  type: 'patternLines',
                  background: 'inherit',
                  color: 'rgba(255, 255, 255, 0.3)',
                  rotation: -45,
                  lineWidth: 6,
                  spacing: 10,
                },
              ]}
              fill={[
                {
                  match: {
                    id: 'ruby',
                  },
                  id: 'dots',
                },
                {
                  match: {
                    id: 'c',
                  },
                  id: 'dots',
                },
                {
                  match: {
                    id: 'go',
                  },
                  id: 'dots',
                },
                {
                  match: {
                    id: 'python',
                  },
                  id: 'dots',
                },
                {
                  match: {
                    id: 'scala',
                  },
                  id: 'lines',
                },
                {
                  match: {
                    id: 'lisp',
                  },
                  id: 'lines',
                },
                {
                  match: {
                    id: 'elixir',
                  },
                  id: 'lines',
                },
                {
                  match: {
                    id: 'javascript',
                  },
                  id: 'lines',
                },
              ]}
              legends={[
                {
                  anchor: 'bottom',
                  direction: 'row',
                  translateY: 56,
                  itemWidth: 100,
                  itemHeight: 18,
                  symbolSize: 18,
                  symbolShape: 'circle',
                },
              ]}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default LoadingHOC('data2')(Graphs);
