import { Injectable } from '@nestjs/common';
import { PrismaService } from '@iorder-next/backend/common';
import { Category } from '.prisma/client';

@Injectable()
export class CatalogCategoriesRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async getCategories(params: any): Promise<Category[]> {
    return this.prisma.category.findMany({});
  }
}
