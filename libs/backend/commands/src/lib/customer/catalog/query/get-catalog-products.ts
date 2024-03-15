import { CatalogProductsRepository } from '@io/backend/repository';
import { Injectable } from '@nestjs/common';
import { ActionBase } from '../../../core/action.base';
import { Product } from '@prisma/client';

interface Dto {
  supplierId: number;
  limit: number;
  page: number;
}
@Injectable()
export class GetCatalogProductsQuery extends ActionBase {
  constructor(private catalogProductsRepository: CatalogProductsRepository) {
    super();
  }
  async execute(params: Dto): Promise<Product[]> {
    try {
      const page = params.page || 1;
      const limit = params.limit || 10;
      //const sort = params.sort || CatalogSortEnum.ASC;
      return await this.catalogProductsRepository.getProducts({ supplierId: params.supplierId, limit, page });
    } catch (error) {
      this.logger.error(error);
      return [];
    }
  }
}
