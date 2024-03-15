import { Injectable } from '@nestjs/common';
import { PrismaService } from '@io/backend/common';
import { Product } from '@prisma/client';
import { GetProductRepositoryDto } from './dto/get-product.dto';

@Injectable()
export class CatalogProductRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async getProduct(params: GetProductRepositoryDto): Promise<Product | null> {
    return this.prisma.product.findUnique({
      where: {
        id: params.productId,
      },
    });
  }
}
