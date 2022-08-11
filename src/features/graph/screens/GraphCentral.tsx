import { useState } from 'react';
import { FormLabel, InputGroup } from '@castoredc/matter';
import { ResponsiveNetworkCanvas, NodeTooltipProps } from '@nivo/network';
import styled from 'styled-components';
import exampleOutput from '../data/exampleOutput';
import { getInitialGraphData } from '../data/dataToGraphCentral';
import { TooltipVessel } from './GraphConstellation';

const Vessel = styled.main`
  height: calc(100vh - 2rem);
`;

const Tooltip = (data: NodeTooltipProps<any>) => {
  const { fileName, fileSize, path, id } = data.node.data;
  if (fileName && fileSize && path) {
    return (
      <TooltipVessel>
        <span>name: {fileName}</span>
        <span>size: {fileSize}</span>
        <span>path: {path}</span>
      </TooltipVessel>
    );
  } else {
    return (
      <TooltipVessel>
        <span>name: {id}</span>
      </TooltipVessel>
    );
  }
};

const Graph = () => {
  const [search, setSearch] = useState({ mode: 'includes', name: '' });
  const [centeringStrength, setCenteringStrength] = useState(0.15);
  const [graphData] = useState(getInitialGraphData(exampleOutput));

  console.log(graphData);

  return (
    <Vessel>
      <div style={{ display: 'flex' }}>
        <div
          style={{ display: 'flex', alignItems: 'center', marginRight: '1rem' }}
        >
          <div
            style={{
              marginRight: '0.25rem',
              width: 15,
              height: 15,
              borderRadius: '50%',
              background: 'rgb(97, 205, 187)',
            }}
          />
          Number of parent components:{' '}
          {graphData.nodes.filter((x) => x.size === 15).length}
        </div>
        <div
          style={{ display: 'flex', alignItems: 'center', marginRight: '1rem' }}
        >
          <div
            style={{
              marginRight: '0.25rem',
              width: 10,
              height: 10,
              borderRadius: '50%',
              background: 'orange',
            }}
          />
          Number of non-parent components:{' '}
          {
            graphData.nodes.filter(
              (x) => x.size === 10 && !x.id.startsWith('Ext')
            ).length
          }
        </div>
        <div
          style={{ display: 'flex', alignItems: 'center', marginRight: '1rem' }}
        >
          <div
            style={{
              marginRight: '0.25rem',
              width: 10,
              height: 10,
              borderRadius: '50%',
              background: 'palevioletred',
            }}
          />
          Number of Extjs basic components:{' '}
          {graphData.nodes.filter((x) => x.id.startsWith('Ext')).length}
        </div>
      </div>
      <div
        style={{
          display: 'flex',
        }}
      >
        <div
          style={{
            marginRight: '1rem',
          }}
        >
          <InputGroup
            labelText="Component name"
            onChange={(e) =>
              setSearch({ mode: 'includes', name: e.target.value })
            }
            placeholder="DataEntry, Admin, etc.."
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <FormLabel>Centering strength: {centeringStrength}</FormLabel>
          <input
            type="range"
            step={0.05}
            min={0.1}
            defaultValue={0.15}
            max={1}
            onChange={(e) => setCenteringStrength(Number(e.target.value))}
          />
        </div>
      </div>
      <ResponsiveNetworkCanvas
        data={graphData}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        centeringStrength={centeringStrength}
        distanceMax={500}
        repulsivity={100}
        // linkColor={(e) => 'red'}
        nodeSize={(e) => e.size}
        activeNodeSize={(e) => e.size}
        inactiveNodeSize={(e) => e.size}
        nodeColor={(e) => {
          if (e.id === 'PARENT') {
            return e.color;
          }

          if (!search.name) {
            return e.color;
          }

          if (
            search.mode === 'includes' &&
            e.id.toLowerCase().includes(search.name.toLowerCase())
          ) {
            return 'red';
          }

          if (
            search.mode === 'equals' &&
            e.id.toLowerCase() === search.name.toLowerCase()
          ) {
            return 'red';
          }

          return e.color;
        }}
        nodeBorderWidth={1}
        nodeBorderColor={{
          from: 'color',
          modifiers: [['darker', 0.8]],
        }}
        animate={false}
        onClick={(e) => {
          if (e.id !== 'PARENT') {
            setSearch({
              mode: 'equals',
              name: e.id,
            });
          }
        }}
        nodeTooltip={Tooltip}
      />
    </Vessel>
  );
};

export default Graph;
