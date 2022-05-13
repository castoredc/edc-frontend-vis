import React, { useEffect } from 'react';
import { ResponsiveNetwork } from '@nivo/network';
import styled from 'styled-components';
import dataMock from '../data/dataMock.json';
import exampleOutput from '../data/exampleOutput';
import dataToGraph from '../data/dataToGraph';

const Vessel = styled.main`
  height: 100vh;
`;

// Working graph with mock data for now
//
const Graph = () => {
  const nodesAndLinks = dataToGraph(exampleOutput);

  useEffect(() => {
    console.group('Graph page');
    console.log('nodesAndLinks');
    console.dir(nodesAndLinks);
    console.groupEnd();
  }, [nodesAndLinks]);

  return (
    <Vessel>
      <ResponsiveNetwork
        data={dataMock}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        linkDistance={function (e) {
          return e.distance;
        }}
        centeringStrength={0.3}
        repulsivity={6}
        nodeSize={function (n) {
          return n.size;
        }}
        activeNodeSize={function (n) {
          return 1.5 * n.size;
        }}
        nodeColor={function (e) {
          return e.color;
        }}
        nodeBorderWidth={1}
        nodeBorderColor={{
          from: 'color',
          modifiers: [['darker', 0.8]],
        }}
        linkThickness={function (n) {
          return 2 + 2 * n.target.data.height;
        }}
        linkBlendMode="multiply"
        motionConfig="wobbly"
      />
    </Vessel>
  );
};

export default Graph;
