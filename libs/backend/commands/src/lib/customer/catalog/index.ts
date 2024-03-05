import { GetCatalogCategoriesQuery } from "./query/get-catalog-categories.query";
import { GetCatalogProductQuery } from "./query/get-catalog-product";
import { GetCatalogProductsQuery } from "./query/get-catalog-products";

export * from './query/get-catalog-categories.query';
export * from './query/get-catalog-product';
export * from './query/get-catalog-products';

export const CATALOG_COMMANDS = [
  GetCatalogProductsQuery,
  GetCatalogProductQuery,
  GetCatalogCategoriesQuery
];
