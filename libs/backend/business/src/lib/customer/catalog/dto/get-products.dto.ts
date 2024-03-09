import { GetCatalogProductsCommandRequestQuerySchema, GetCatalogProductsCommandResponseSchema } from '@iorder-next/contracts/api';
import { createZodDto } from 'nestjs-zod';

export class GetCatalogProductsQueryDto extends createZodDto(GetCatalogProductsCommandRequestQuerySchema) {}
export class GetCatalogProductsResponseDto extends createZodDto(GetCatalogProductsCommandResponseSchema) {}
