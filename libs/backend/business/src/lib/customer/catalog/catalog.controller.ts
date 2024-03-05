import { Controller, Get, Query, Req } from '@nestjs/common';
import { Request } from 'express';
import { CatalogProductsService } from './services/products.service';
import { GetCatalogProductsResponseDto } from './dto/get-products.dto';
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
  async getProducts(): Promise<GetCatalogProductsResponseDto> {
    return this.catalogProductsService.getProducts({});
  }

  @Get('categories')
  async getCategories(@Query() query: GetCatalogCategoriesQueryDto): Promise<GetCatalogCategoriesResponseDto> {
    return this.catalogCategoriesService.getCategories(query);
  }

  @Get('product-details')
  async getProductDetails(@Query() query: GetCatalogProductQueryDto): Promise<GetCatalogProductResponseDto> {
    return this.catalogProductService.getProduct({
      productId: query.productId
    });
  }

}
