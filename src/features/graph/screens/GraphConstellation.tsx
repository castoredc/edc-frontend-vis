import { useEffect } from 'react';
import { ResponsiveNetwork, NodeTooltipProps } from '@nivo/network';
import styled from 'styled-components';
import exampleOutput from '../data/exampleOutput';
import dataToGraphConstellation from '../data/dataToGraphConstellation';

const TooltipVessel = styled.div`
  padding: 0.5em 1em;
  border-radius: 1rem;
  white-space: pre;
  background-color: #fffa;

  & > span {
    display: block;
  }
`;
const Tooltip = (data: NodeTooltipProps<any>) => (
  <TooltipVessel>
    <span>name: {data.node.data.fileName}</span>
    <span>size: {data.node.data.sizeString}</span>
    <span>path: {data.node.data.path}</span>
  </TooltipVessel>
);

const Vessel = styled.main`
  height: calc(100vh - 2rem);
  width: calc(100vw - 33rem);
  background-color: #f5faff;
  overflow: scroll;

  & > section {
    height: 277rem;
    width: 277rem;
  }
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
      <section>
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
          nodeTooltip={Tooltip}
        />
      </section>
    </Vessel>
  );
};

export default Graph;
