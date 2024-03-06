import { CatalogProductRepository } from "@iorder-next/backend/repository";
import { ActionBase } from "../../../core/action.base";
import { Product } from "@prisma/client";
import { Injectable } from "@nestjs/common";

interface Dto {
  productId: number;
  supplierId: number;
  legalEntityId: number;
  deliveryPointId: number;
}
@Injectable()
export class GetCatalogProductQuery extends ActionBase {
  constructor(private catalogProductRepository: CatalogProductRepository) { super(); }
  async execute(params: Dto): Promise<Product | null> {
    try {
      return await this.catalogProductRepository.getProduct({ ...params});
    } catch (error) {
      this.logger.error(error);
      return null;
    }
  }
}
