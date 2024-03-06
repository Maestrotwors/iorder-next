import { Controller, Get, NotFoundException, Query } from '@nestjs/common';
import { CatalogProductsService } from './services/products.service';
import { GetCatalogProductsQueryDto, GetCatalogProductsResponseDto } from './dto/get-products.dto';
import { CatalogProductService } from './services/product.service';
import { GetCatalogProductQueryDto, GetCatalogProductResponseDto } from './dto/get-product-details.dto';
import { CatalogCategoriesService } from './services/categories.service';
import { GetCatalogCategoriesQueryDto, GetCatalogCategoriesResponseDto } from './dto/get-categories.dto';

@Controller('catalog')
export class CatalogController {
  constructor(
    private readonly catalogProductsService: CatalogProductsService,
    private readonly catalogProductService: CatalogProductService,
    private readonly catalogCategoriesService: CatalogCategoriesService
  ) {}
  @Get('health-check')
  async ping(): Promise<true> {
    return true;
  }

  @Get('products')
  async getProducts(@Query() query: GetCatalogProductsQueryDto): Promise<GetCatalogProductsResponseDto> {
    return this.catalogProductsService.getProducts(query);
  }

  @Get('categories')
  async getCategories(@Query() query: GetCatalogCategoriesQueryDto): Promise<GetCatalogCategoriesResponseDto> {
    return this.catalogCategoriesService.getCategories(query);
  }

  @Get('product-details')
  async getProductDetails(@Query() query: GetCatalogProductQueryDto): Promise<GetCatalogProductResponseDto> {
    const product = await this.catalogProductService.getProduct(query);
    if (!product) throw new NotFoundException('Product not found');
    return  product;
  }

}
