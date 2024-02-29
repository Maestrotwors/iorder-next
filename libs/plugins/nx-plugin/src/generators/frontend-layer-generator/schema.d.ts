export type Layer = 'page' | 'widget' | 'feature' | 'shared' | 'repository' | 'core' | 'contract' | 'ui';

export type ProjectType = 'customer' | 'supplier' | 'admin' | 'landing' | 'shared';

export interface LibraryGeneratorSchema {
  name: string;
  layer: Layer;
  projectType: ProjectType;
  directory?: string;
}
