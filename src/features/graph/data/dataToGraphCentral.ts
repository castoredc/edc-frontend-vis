import { CJS, DataToGraphReturn, NetNode, NetLink } from './types';

export const initialGraphData = (data: CJS): DataToGraphReturn => {
  const bigArray = data.config;

  const mainNodes: NetNode[] = bigArray.map((components) => ({
    id: components.name,
    height: 0,
    size: 15,
    color: 'rgb(97, 205, 187)',
    fileSize: components.size,
    path: components.path,
    fileName: components.fileName,
  }));

  const allNodes: NetNode[] = [
    {
      id: 'PARENT',
      height: 1,
      size: 30,
      color: 'rgb(232, 193, 160)',
    },
    ...mainNodes,
  ];

  const linksForMainNodes = mainNodes.map((node) => ({
    source: 'PARENT',
    target: node.id,
    distance: 130,
  }));

  return {
    nodes: allNodes,
    links: linksForMainNodes,
  };
};

export const getSecondaryNodesAndLinks = (
  mainNodeName: string,
  data: CJS
): DataToGraphReturn => {
  const bigArray = data.config;

  const nodesAndLinks = bigArray.reduce<{ nodes: NetNode[]; links: NetLink[] }>(
    (acc, current) => {
      if (mainNodeName === current.name) {
        const {
          importedExtComponents,
          importedReactComponents,
          defaultExtComponents,
        } = current.childComponents;

        const allChild = [
          ...importedExtComponents,
          ...importedReactComponents,
          ...defaultExtComponents,
        ];

        const nodes = allChild.map((child) => ({
          id: `${mainNodeName}-${child.name}`,
          height: 1,
          color: 'rgb(232, 193, 160)',
          size: 10,
        }));

        const links = allChild.map((importedName: any) => ({
          source: mainNodeName,
          target: `${mainNodeName}-${importedName.name}`,
          distance: 130,
        }));

        return { nodes, links };
      } else {
        return { nodes: acc.nodes, links: acc.links };
      }
    },
    { nodes: [], links: [] }
  );

  return nodesAndLinks;
};

export const removePreviousNodesAndLinks = (
  mainNodeName: string,
  data: CJS,
  previousData: DataToGraphReturn
): DataToGraphReturn => {
  const nodeAndLinksToRemove = getSecondaryNodesAndLinks(mainNodeName, data);

  return {
    nodes: previousData.nodes.filter(
      (ar) => !nodeAndLinksToRemove.nodes.find((rm) => rm.id === ar.id)
    ),
    links: previousData.links.filter(
      (ar) => !nodeAndLinksToRemove.links.find((rm) => rm.source === ar.source)
    ),
  };
};
