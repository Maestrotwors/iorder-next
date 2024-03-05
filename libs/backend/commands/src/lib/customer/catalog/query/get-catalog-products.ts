import { CatalogProductsRepository } from "@iorder-next/backend/repository";
import { Injectable } from "@nestjs/common";
import { ActionBase } from "../../../core/action.base";
import { Product } from "@prisma/client";

@Injectable()
export class GetCatalogProductsQuery extends ActionBase {
  constructor(private catalogProductsRepository: CatalogProductsRepository) { super(); }
  async execute(params: {}): Promise<Product[]> {
    try {
      return await this.catalogProductsRepository.getProducts({});
    } catch (error) {
      this.logger.error(error);
      return [];
    }
  }
}
