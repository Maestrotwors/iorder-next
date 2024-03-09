import { GetCatalogCategoriesQuery } from '@iorder-next/backend/commands';
import { Injectable } from '@nestjs/common';
import { GetCatalogCategoriesQueryDto, GetCatalogCategoriesResponseDto } from '../dto/get-categories.dto';

@Injectable()
export class CatalogCategoriesService {
  constructor(private getCatalogCategoriesQuery: GetCatalogCategoriesQuery) {}

  async getCategories(dto: GetCatalogCategoriesQueryDto): Promise<GetCatalogCategoriesResponseDto> {
    return await this.getCatalogCategoriesQuery.execute(dto);
  }
}
