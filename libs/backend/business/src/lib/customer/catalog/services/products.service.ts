import { Injectable } from '@nestjs/common';
import { GetCatalogProductsQueryDto, GetCatalogProductsResponseDto } from '../dto/get-products.dto';
import { GetCatalogProductsQuery } from '@iorder-next/backend/commands';

@Injectable()
export class CatalogProductsService {
  constructor(private getCatalogProductsQuery: GetCatalogProductsQuery) {}

  async getProducts(dto: GetCatalogProductsQueryDto): Promise<GetCatalogProductsResponseDto> {
    const products = await this.getCatalogProductsQuery.execute(dto);

    return {
      products: {
        items: products,
        totalCountProducts: 1000,
      },
    };
  }
}
