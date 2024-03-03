import { Module } from '@nestjs/common';
import { CatalogController } from './catalog.controller';
import { CatalogProductsService } from './services/products.service';
import { CatalogActionService } from '@iorder-next/backend/commands';
import { CatalogProductService } from './services/product.service';

@Module({
  imports: [],
  controllers: [CatalogController],
  providers: [
    CatalogProductsService,
    CatalogProductService,
    CatalogActionService
  ],
  exports: [],
})
export class CatalogModule {}
