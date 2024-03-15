import { Module } from '@nestjs/common';
import { CatalogController } from './catalog.controller';
import { CATALOG_COMMANDS } from '@io/backend/commands';
import { CATALOG_SERVICES } from './services';
import { CATALOG_REPOSITORIES } from '@io/backend/repository';

@Module({
  imports: [],
  controllers: [CatalogController],
  providers: [...CATALOG_SERVICES, ...CATALOG_REPOSITORIES, ...CATALOG_COMMANDS],
  exports: [],
})
export class CatalogModule {}
