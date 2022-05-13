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
  fileName: string;
}
export interface CJS {
  config: ComponentDesc[];
}

export interface NetLink {
  source: string;
  target: string;
  distance: number;
}

export interface NetNode {
  id: string;
  height: number;
  color: string;
  size: number;
}

export interface DataToGraphReturn {
  nodes: NetNode[];
  links: NetLink[];
}
