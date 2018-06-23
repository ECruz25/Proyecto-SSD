import React, { Component } from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { ResponsivePie } from '@nivo/pie';
import { ResponsiveLine } from '@nivo/line';
import LoadingHOC from './HOC/LoadingHOC';

class Graphs extends Component {
  render() {
    return (
      <div className="graphs">
        {this.props.type === 'line' && (
          <ResponsiveLine
            data={this.props.data}
            margin={{
              top: 50,
              right: 110,
              bottom: 50,
              left: 60,
            }}
            minY="auto"
            stacked
            axisBottom={{
              orient: 'bottom',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Año',
              legendOffset: 36,
              legendPosition: 'center',
            }}
            axisLeft={{
              orient: 'left',
              tickSize: 1,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Cantidad de Ordenes Vencidas',
              legendOffset: -40,
              legendPosition: 'center',
            }}
            dotSize={10}
            dotColor="inherit:darker(0.3)"
            dotBorderWidth={2}
            dotBorderColor="#ffffff"
            enableDotLabel
            dotLabel="y"
            dotLabelYOffset={-12}
            animate
            motionStiffness={90}
            motionDamping={15}
            legends={[
              {
                anchor: 'bottom-right',
                direction: 'column',
                translateX: 100,
                itemWidth: 80,
                itemHeight: 20,
                symbolSize: 12,
                symbolShape: 'circle',
              },
            ]}
          />
        )}
        {this.props.type === 'bar' && (
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
              legend: 'Costo',
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
        )}
        {this.props.type === 'pie' && (
          <ResponsivePie
            data={[
              {
                id: this.props.data[0].id,
                label: this.props.data[0].label,
                value: this.props.data[0].value,
                color: 'hsl(248, 70%, 50%)',
              },
              {
                id: this.props.data[1].id,
                label: this.props.data[1].label,
                value: this.props.data[1].value,
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
                  id: 'complete',
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
        )}
      </div>
    );
  }
}
export default LoadingHOC('data')(Graphs);
