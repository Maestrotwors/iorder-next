import { Injectable } from '@nestjs/common';
import { PrismaService } from '@iorder-next/backend/common';
import { Product } from '@prisma/client';
import { GetProductDto } from './dto/get-product.dto';

@Injectable()
export class CatalogProductRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async getProduct(params: GetProductDto): Promise<Product | null> {
    return this.prisma.product.findUnique({
      where: {
        id: params.productId
      }
    });
  }
}
