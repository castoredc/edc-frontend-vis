import { CJS, DataToGraphReturn, NetNode, NetLink, Node } from './types';

export const getInitialGraphData = (allNodes: Node[]): DataToGraphReturn =>
  allNodes.reduce<DataToGraphReturn>(
    (result, node) => {
      return {
        nodes: [
          ...result.nodes,
          {
            id: node.name,
            height: 0,
            size: node.childComponents ? 15 : 10,
            color: node.childComponents ? 'rgb(97, 205, 187)' : 'orange',
            fileSize: '',
            path: '',
            fileName: '',
          },
        ],
        links: [
          ...result.links,
          ...(node.childComponents
            ? [
                ...[
                  ...node.childComponents,
                  ...node.extendsExtComponents!,
                  ...node.usesExtComponents!,
                ]
                  .filter(
                    (x, index, arr) => arr.findIndex((_) => _ === x) === index
                  )
                  .map((childName) => ({
                    distance: 130,
                    source: node.name,
                    target: childName,
                  })),
                // Link of a big component to the root
                {
                  source: 'PARENT',
                  target: node.name,
                  distance: 130,
                },
              ]
            : []),
        ],
      };
    },
    {
      nodes: [
        {
          id: 'PARENT',
          height: 1,
          size: 30,
          color: 'rgb(232, 193, 160)',
        },
      ],
      links: [],
    }
  );

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
