import { CJS, DataToGraphReturn, NetNode, NetLink } from './types';

// This function takes ./exampleOutput.json as input
// Returns nodes and links to pass to Network graph
//
const dataToGraph = (data: CJS): DataToGraphReturn => {
  const bigArray = data.config;

  const mainNodes: NetNode[] = bigArray.map((components) => ({
    id: components.name,
    height: 1,
    size: 30,
    color: 'rgb(97, 205, 187)',
  }));

  const secondaryNodes: NetNode[] = bigArray.reduce<NetNode[]>((acc, curr) => {
    const {
      importedExtComponents,
      importedReactComponents,
      defaultExtComponents,
    } = curr.childComponents;

    const allChild = [
      ...importedExtComponents,
      ...importedReactComponents,
      ...defaultExtComponents,
    ];

    const nodes = allChild.map((child) => ({
      id: `${curr.name}-${child.name}`,
      height: 1,
      color: 'rgb(232, 193, 160)',
      size: 20,
    }));

    return [...acc, ...nodes];
  }, []);

  const allNodes: NetNode[] = [
    { id: 'PARENT', height: 1, size: 30, color: 'rgb(97, 205, 187)' },
    ...mainNodes,
    ...secondaryNodes,
  ];

  const links: NetLink[] = bigArray.reduce<NetLink[]>((acc, curr) => {
    const {
      importedExtComponents,
      importedReactComponents,
      defaultExtComponents,
    } = curr.childComponents;

    const allChild = [
      ...importedExtComponents,
      ...importedReactComponents,
      ...defaultExtComponents,
    ];

    const links = allChild.map((importedName: any) => ({
      source: curr.name,
      target: `${curr.name}-${importedName.name}`,
      distance: 100, // TODO: figure out how to calculate distance between nodes
    }));

    return [...acc, ...links];
  }, []);

  const additionalLinksForMainNodes = mainNodes.map((node) => ({
    source: 'PARENT',
    target: node.id,
    distance: 100,
  }));

  const allLinks = [...additionalLinksForMainNodes, ...links];
  return {
    nodes: allNodes,
    links: allLinks,
  };
};

export default dataToGraph;
