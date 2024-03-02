import { Module } from '@nestjs/common';
import { CatalogController } from './catalog.controller';

@Module({
  imports: [],
  controllers: [CatalogController],
  providers: [],
  exports: [],
})
export class CatalogModule {}
