import { useState } from 'react';
import {
  ComputedNode,
  ResponsiveNetwork,
  NodeTooltipProps,
} from '@nivo/network';
import styled from 'styled-components';
import exampleOutput from '../data/exampleOutput';
import {
  getSecondaryNodesAndLinks,
  initialGraphData,
  removePreviousNodesAndLinks,
} from '../data/dataToGraphCentral';
import { NetNode } from '../data/types';
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
  const [graphData, setGraphData] = useState(initialGraphData(exampleOutput));

  const [previousSelectedNode, setPreviousSelectedNode] = useState('');

  const handleNodeClick = (nodeConfig: ComputedNode<NetNode>) => {
    if (nodeConfig.color === 'rgb(97, 205, 187)') {
      let newNodesAndLinks = getSecondaryNodesAndLinks(
        nodeConfig.id,
        exampleOutput
      );

      setGraphData((previousData) => {
        if (previousSelectedNode) {
          const updatedNodes = removePreviousNodesAndLinks(
            previousSelectedNode,
            exampleOutput,
            previousData
          );

          return {
            nodes: [...updatedNodes.nodes, ...newNodesAndLinks.nodes],
            links: [...updatedNodes.links, ...newNodesAndLinks.links],
          };
        } else {
          return {
            nodes: [...previousData.nodes, ...newNodesAndLinks.nodes],
            links: [...previousData.links, ...newNodesAndLinks.links],
          };
        }
      });

      setPreviousSelectedNode(nodeConfig.id);
    }
  };

  return (
    <Vessel>
      <ResponsiveNetwork
        data={graphData}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        linkDistance={function (e) {
          return e.distance;
        }}
        centeringStrength={0.2}
        repulsivity={20}
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
        onClick={handleNodeClick}
        nodeTooltip={Tooltip}
      />
    </Vessel>
  );
};

export default Graph;
