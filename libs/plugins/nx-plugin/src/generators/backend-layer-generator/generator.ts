import { formatFiles, Tree } from '@nx/devkit';
import { LibraryGeneratorSchema } from './schema';
import { libraryGenerator } from '@nx/nest';

export async function libGenerator(tree: Tree, options: LibraryGeneratorSchema) {
  const directory = options?.directory ? `/${options.directory}` : '';

  await libraryGenerator(tree, {
    name: options.name,
    tags: 'backend-layer:' + options.layer + ',scope:' + options.projectType,
    directory: 'backend/' + options.layer + '/' + options.projectType + directory,
  });
  await formatFiles(tree);
}

export default libGenerator;
