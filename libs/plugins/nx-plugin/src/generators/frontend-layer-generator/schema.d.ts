export type Layer =
  | 'page'
  | 'widget'
  | 'feature'
  | 'shared'
  | 'repository'
  | 'core'
  | 'ui';

export type ProjectType =
  | 'customer'
  | 'supplier'
  | 'admin'
  | 'landing';

export interface LibraryGeneratorSchema {
  name: string;
  layer: Layer;
  projectType: ProjectType;
  directory?: string;
}
