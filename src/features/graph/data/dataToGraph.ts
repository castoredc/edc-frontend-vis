import { CJS, DataToGraphReturn, NetNode, NetLink } from './types';

// This function takes ./exampleOutput.json as input
// Returns nodes and links to pass to Network graph
//
const dataToGraph = (data: CJS): DataToGraphReturn => {
  const bigArray = data.config;
  const namesWithoutJs = bigArray.map((file) => ({
    ...file,
    name: file.name.replace(/\.js$/, ''),
  }));

  const nodes: NetNode[] = namesWithoutJs.map((components) => ({
    id: components.name,
    height: 1,
    size: parseFloat(components.size),
    color: 'rgb(97, 205, 187)', // TODO: color should represent type of file
  }));

  const links: NetLink[] = namesWithoutJs.reduce<NetLink[]>((acc, curr) => {
    const importedExtComponents = curr.childComponents.importedExtComponents;
    const links = importedExtComponents.map((importedName: any) => ({
      source: curr.name,
      target: importedName.name,
      distance: 50, // TODO: figure out how to calculate distance between nodes
    }));
    return [...acc, ...links];
  }, []);

  const safeLinks: NetLink[] = links.reduce<NetLink[]>((acc, curr) => {
    const linkIncludedInNodeList =
      nodes.some((node) => node.id === curr.source) &&
      nodes.some((node) => node.id === curr.target);
    return linkIncludedInNodeList ? [...acc, curr] : acc;
  }, []);

  return {
    nodes,
    links: safeLinks,
  };
};

export default dataToGraph;
