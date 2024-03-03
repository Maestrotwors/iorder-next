import { CatalogProductRepository } from "@iorder-next/backend/repository";
import { ActionBase } from "../../../core/action.base";
import { Product } from "@prisma/client";

export class GetCatalogProductQuery extends ActionBase {
  protected readonly catalogProductRepository: CatalogProductRepository = new CatalogProductRepository(this.prismaService);
  async execute(params: {productId: number}): Promise<Product | null> {
    try {
      return await this.catalogProductRepository.getProduct({ ...params});
    } catch (error) {
      this.logger.error(error);
      return null;
    }
  }
}
