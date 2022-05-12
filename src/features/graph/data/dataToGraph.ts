// Typings coming soon
// This function takes ./exampleOutput.json as input
// Returns nodes and links to pass to Network graph
//
const dataToGraph = (data: any) => {
  const bigArray = data.config;
  const namesWithoutJs = bigArray.map((file: any) => ({
    ...file,
    name: file.name.replace(/\.js$/, ''),
  }));

  const nodes = namesWithoutJs.map((components: any) => ({
    id: components.name,
    height: 1,
    size: parseFloat(components.size),
    color: 'rgb(97, 205, 187)', // TODO: color should represent type of file
  }));

  const links = namesWithoutJs.reduce((acc: any, curr: any) => {
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
