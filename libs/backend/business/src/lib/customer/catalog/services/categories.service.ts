import { GetCatalogCategoriesQuery } from "@iorder-next/backend/commands";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CatalogCategoriesService {
  constructor(
    private getCatalogCategoriesQuery: GetCatalogCategoriesQuery
  ) {}

  async getCategories(dto: any): Promise<any> {
    return await this.getCatalogCategoriesQuery.execute(dto);
  }
}
