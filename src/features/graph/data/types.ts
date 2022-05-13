interface ChildComponentsDesc {
  name: string;
  calledAs: string;
  path: string;
}
interface ChildComponents {
  importedExtComponents: ChildComponentsDesc[];
  importedReactComponents: ChildComponentsDesc[];
  defaultExtComponents: ChildComponentsDesc[];
}
interface ComponentDesc {
  childComponents: ChildComponents;
  name: string;
  path: string;
  size: string;
}
export interface CJS {
  config: ComponentDesc[];
}

export interface Link {
  source: string;
  target: string;
  distance: number;
}

export interface Node {
  id: string;
  height: number;
  color: string;
  size: number;
}

export interface DataToGraphReturn {
  nodes: Node[];
  links: Link[];
}
