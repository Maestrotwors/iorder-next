import { Injectable } from "@nestjs/common";
import { GetCatalogProductsQuery } from "./query/get-catalog-products";
import { GetCatalogProductQuery } from "./query/get-catalog-product";

@Injectable()
export class CatalogActionService {
  constructor(
    private getCatalogProductsQuery: GetCatalogProductsQuery,
    private getCatalogProductQuery: GetCatalogProductQuery,
    ) {}

  getCatalogProducts = async () => await this.getCatalogProductsQuery.execute({});
  getCatalogProduct = async (params: {productId: number}) => await this.getCatalogProductQuery.execute({...params});
}
