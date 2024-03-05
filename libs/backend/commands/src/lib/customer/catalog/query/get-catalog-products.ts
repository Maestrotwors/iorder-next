import { CatalogProductsRepository } from "@iorder-next/backend/repository";
import { Injectable } from "@nestjs/common";
import { ActionBase } from "../../../core/action.base";
import { Product } from "@prisma/client";

interface Dto {

}
@Injectable()
export class GetCatalogProductsQuery extends ActionBase {
  constructor(private catalogProductsRepository: CatalogProductsRepository) { super(); }
  async execute(params: Dto): Promise<Product[]> {
    try {
      return await this.catalogProductsRepository.getProducts(params);
    } catch (error) {
      this.logger.error(error);
      return [];
    }
  }
}
