import { Injectable } from "@nestjs/common";
import { ActionBase } from "../../../core/action.base";
import { CatalogCategoriesRepository } from "@iorder-next/backend/repository";
import { Category } from "@prisma/client";

interface Dto {
  supplierId: number;
}
@Injectable()
export class GetCatalogCategoriesQuery extends ActionBase {
  constructor(private catalogCategoriesRepository: CatalogCategoriesRepository) { super(); }
  async execute(params: Dto): Promise<Category[]> {
    try {
      return await this.catalogCategoriesRepository.getCategories(params);
    } catch (error) {
      this.logger.error(error);
      return [];
    }
  }
}
