import { Injectable, NotFoundException } from "@nestjs/common";
import { CatalogActionService } from "@iorder-next/backend/commands";
import { GetCatalogProductQueryDto } from "../dto/get-product-details.dto";

@Injectable()
export class CatalogProductService {
  constructor(
    private readonly catalogActionService: CatalogActionService
  ) {}

  async getProduct(dto: GetCatalogProductQueryDto): Promise<any> {
    const product = await this.catalogActionService.getCatalogProduct(dto);

    return product ?? new NotFoundException('Product not found');
  }
}
