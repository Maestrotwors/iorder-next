export type Layer = 'page' | 'widget' | 'feature' | 'shared' | 'repository' | 'core' | 'api' | 'ui';

export type ProjectType = 'customer' | 'supplier' | 'admin' | 'landing' | 'shared';

export interface LibraryGeneratorSchema {
    name: string;
    layer: Layer;
    projectType: ProjectType;
    directory?: string;
}
