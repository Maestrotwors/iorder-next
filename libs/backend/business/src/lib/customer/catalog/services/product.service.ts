import { Injectable, NotFoundException } from "@nestjs/common";
import { CatalogActionService } from "@iorder-next/backend/commands";
import { GetCatalogProductQueryDto } from "../dto/get-product-details.dto";

@Injectable()
export class CatalogProductService {
  constructor(
    private readonly catalogActionService: CatalogActionService
  ) {}

  async getProduct(dto: GetCatalogProductQueryDto): Promise<any> {
    return await this.catalogActionService.getCatalogProduct(dto) ?? new NotFoundException('Product not found');
  }
}
