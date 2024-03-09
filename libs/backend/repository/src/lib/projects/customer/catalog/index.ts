import { CatalogCategoriesRepository } from './categories.repository';
import { CatalogProductRepository } from './product.repository';
import { CatalogProductsRepository } from './products.repository';

export * from './product.repository';
export * from './products.repository';
export * from './categories.repository';

export const CATALOG_REPOSITORIES = [CatalogProductsRepository, CatalogProductRepository, CatalogCategoriesRepository];
