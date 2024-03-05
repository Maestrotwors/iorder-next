import { Injectable } from "@nestjs/common";
import { ActionBase } from "../../../core/action.base";
import { CatalogCategoriesRepository } from "@iorder-next/backend/repository";
import { Category } from "@prisma/client";

@Injectable()
export class GetCatalogCategoriesQuery extends ActionBase {
  constructor(private catalogCategoriesRepository: CatalogCategoriesRepository) { super(); }
  async execute(params: {}): Promise<Category[]> {
    try {
      return await this.catalogCategoriesRepository.getCategories({});
    } catch (error) {
      this.logger.error(error);
      return [];
    }
  }
}
