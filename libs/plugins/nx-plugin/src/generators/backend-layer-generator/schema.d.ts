export type Layer = 'business' | 'repository';

export type ProjectType = 'customer' | 'supplier' | 'admin' | 'auth' | 'shared';

export interface LibraryGeneratorSchema {
  name: string;
  layer: Layer;
  projectType: ProjectType;
  directory?: string;
}
