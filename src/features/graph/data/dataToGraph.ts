import { CJS, DataToGraphReturn, Node, Link } from './types';

// This function takes ./exampleOutput.json as input
// Returns nodes and links to pass to Network graph
//
const dataToGraph = (data: CJS): DataToGraphReturn => {
  const bigArray = data.config;
  const namesWithoutJs = bigArray.map((file) => ({
    ...file,
    name: file.name.replace(/\.js$/, ''),
  }));

  const nodes: Node[] = namesWithoutJs.map((components) => ({
    id: components.name,
    height: 1,
    size: parseFloat(components.size),
    color: 'rgb(97, 205, 187)', // TODO: color should represent type of file
  }));

  const links: Link[] = namesWithoutJs.reduce<Link[]>((acc, curr) => {
    const importedExtComponents = curr.childComponents.importedExtComponents;
    const links = importedExtComponents.map((importedName: any) => ({
      source: curr.name,
      target: importedName.name,
      distance: 50, // TODO: figure out how to calculate distance between nodes
    }));
    return [...acc, ...links];
  }, []);

  return {
    nodes,
    links,
  };
};

export default dataToGraph;
