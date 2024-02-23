import { formatFiles, Tree } from '@nx/devkit';
import { LibraryGeneratorSchema } from './schema';
import { libraryGenerator } from '@nx/angular/generators';

export async function libGenerator(tree: Tree, options: LibraryGeneratorSchema) {
  const directory = options?.directory ? `/${options.directory}` : '';
  const directoryParsed = directory.replace(/\//g, '-');
  const selector = `io-${options.projectType}-${options.layer}${options?.directory ? `-${directoryParsed}` : ''}-${options.name}`;

  await libraryGenerator(tree, {
    name: options.name,
    tags: 'frontend-layer:' + options.layer + ',project:' + options.projectType,
    changeDetection: 'OnPush',
    selector,
    standalone: true,
    style: 'scss',
    directory: 'frontend/' + options.layer + '/' + options.projectType + directory,
  });
  await formatFiles(tree);
}

export default libGenerator;
