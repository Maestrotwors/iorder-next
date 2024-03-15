import { Injectable } from '@nestjs/common';
import { PrismaService } from '@io/backend/common';
import { Category } from '.prisma/client';
import { GetCategoriesRepositoryDto } from './dto/get-categories.dto';

@Injectable()
export class CatalogCategoriesRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async getCategories(params: GetCategoriesRepositoryDto): Promise<Category[]> {
    return this.prisma.category.findMany({
      where: {
        supplierId: params.supplierId,
      },
    });
  }
}
