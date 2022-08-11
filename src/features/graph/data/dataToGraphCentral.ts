import { DataToGraphReturn, Node } from './types';

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
            color: node.childComponents
              ? 'rgb(97, 205, 187)'
              : node.name.startsWith('Ext')
              ? 'palevioletred'
              : 'orange',
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
