import { CatalogProductsRepository } from "@iorder-next/backend/repository";
import { ActionBase } from "../../../core/action.base";
import { Product } from "@prisma/client";

export class GetCatalogProductsQuery extends ActionBase {
  protected readonly catalogProductsRepository: CatalogProductsRepository = new CatalogProductsRepository(this.prismaService);
  async execute(params: {}): Promise<Product[]> {
    try {
      return await this.catalogProductsRepository.getProducts({});
    } catch (error) {
      this.logger.error(error);
      return [];
    }
  }
}
