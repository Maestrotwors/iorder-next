import { GetCatalogProductsCommand } from '@iorder-next/contracts/api';
import { createZodDto } from 'nestjs-zod';

export class GetCatalogProductsQueryDto extends createZodDto(GetCatalogProductsCommand.RequestQuerySchema) {}
export class GetCatalogProductsResponseDto extends createZodDto(GetCatalogProductsCommand.ResponseSchema) {}
