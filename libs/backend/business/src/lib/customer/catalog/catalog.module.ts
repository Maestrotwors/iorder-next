import { Module } from '@nestjs/common';
import { CatalogController } from './catalog.controller';
import { CATALOG_COMMANDS } from '@iorder-next/backend/commands';
import { CATALOG_SERVICES } from './services';
import { CATALOG_REPOSITORIES } from '@iorder-next/backend/repository';

@Module({
  imports: [],
  controllers: [CatalogController],
  providers: [...CATALOG_SERVICES, ...CATALOG_REPOSITORIES, ...CATALOG_COMMANDS],
  exports: [],
})
export class CatalogModule {}
