import { GetCatalogProductDetailsCommandRequestQuerySchema, GetCatalogProductDetailsCommandResponseSchema } from '@io/contracts/api';
import { createZodDto } from 'nestjs-zod';

export class GetCatalogProductQueryDto extends createZodDto(GetCatalogProductDetailsCommandRequestQuerySchema) {}
export class GetCatalogProductResponseDto extends createZodDto(GetCatalogProductDetailsCommandResponseSchema) {}
