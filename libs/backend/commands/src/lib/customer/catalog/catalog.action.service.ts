import { Injectable } from "@nestjs/common";
import { GetCatalogProductsQuery } from "./query/get-catalog-products";
import { GetCatalogProductQuery } from "./query/get-catalog-product";

@Injectable()
export class CatalogActionService {
  getCatalogProducts = async () => await new GetCatalogProductsQuery().execute({});
  getCatalogProduct = async (params: {productId: number}) => await new GetCatalogProductQuery().execute({...params});
}
