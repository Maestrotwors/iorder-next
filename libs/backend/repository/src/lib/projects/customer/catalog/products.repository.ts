import { Injectable } from '@nestjs/common';
import { PrismaService } from '@iorder-next/backend/common';
import { GetProductsRepositoryDto } from './dto/get-products.dto';
import { Product } from '@prisma/client';

@Injectable()
export class CatalogProductsRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async getProducts(params: GetProductsRepositoryDto): Promise<Product[]> {
    return this.prisma.product.findMany({});
  }
}
