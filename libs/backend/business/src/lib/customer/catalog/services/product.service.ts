import { Injectable, NotFoundException } from "@nestjs/common";
import { GetCatalogProductQuery } from "@iorder-next/backend/commands";
import { GetCatalogProductQueryDto } from "../dto/get-product-details.dto";

@Injectable()
export class CatalogProductService {
  constructor(
    private getCatalogProductQuery: GetCatalogProductQuery
  ) {}

  async getProduct(dto: GetCatalogProductQueryDto): Promise<any> {
    return await this.getCatalogProductQuery.execute(dto) ?? new NotFoundException('Product not found');
  }
}
