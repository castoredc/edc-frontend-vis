import { useEffect } from 'react';
import { ResponsiveNetwork } from '@nivo/network';
import styled from 'styled-components';
import exampleOutput from '../data/exampleOutput';
import dataToGraphConstellation from '../data/dataToGraphConstellation';

const Vessel = styled.main`
  height: calc(100vh - 2rem);
  width: calc(100vw - 33rem);
  background-color: #f5faff;
  overflow: scroll;
`;

// Working graph with mock data for now
//
const Graph = () => {
  const nodesAndLinks = dataToGraphConstellation(exampleOutput);

  useEffect(() => {
    console.group('Graph page');
    console.log('nodesAndLinks');
    console.dir(nodesAndLinks);
    console.groupEnd();
  }, [nodesAndLinks]);

  return (
    <Vessel>
      <ResponsiveNetwork
        data={nodesAndLinks}
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
        animate={false}
      />
    </Vessel>
  );
};

export default Graph;
