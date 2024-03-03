import { Injectable } from "@nestjs/common";
import { GetCatalogProductsDto, GetCatalogProductsResponseDto } from "../dto/get-products.dto";
import { CatalogActionService } from "@iorder-next/backend/commands";

@Injectable()
export class CatalogProductsService {
  constructor(
    private readonly catalogActionService: CatalogActionService
  ) {}

  async getProducts(dto: GetCatalogProductsDto): Promise<GetCatalogProductsResponseDto> {
    const products = await this.catalogActionService.getCatalogProducts();

    return {
      products: {
        items: products,
        totalCountProducts: 1000
      }
    };
  }
}
