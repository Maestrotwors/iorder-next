import { GetCatalogProductQuery } from './lib/customer/catalog/query/get-catalog-product';
import { GetCatalogProductsQuery } from './lib/customer/catalog/query/get-catalog-products';

export * from './lib/auth';
export * from './lib/customer/catalog';

export const CUSTOMER_COMMANDS = [
  GetCatalogProductsQuery,
  GetCatalogProductQuery
]
