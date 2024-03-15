import { GetCatalogProductsCommandRequestQuerySchema, GetCatalogProductsCommandResponseSchema } from '@io/contracts/api';
import { createZodDto } from 'nestjs-zod';

export class GetCatalogProductsQueryDto extends createZodDto(GetCatalogProductsCommandRequestQuerySchema) {}
export class GetCatalogProductsResponseDto extends createZodDto(GetCatalogProductsCommandResponseSchema) {}
