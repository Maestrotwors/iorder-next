import {
  GetCatalogProductDetailsCommandRequestQuerySchema,
  GetCatalogProductDetailsCommandResponseSchema,
} from '@iorder-next/contracts/api';
import { createZodDto } from 'nestjs-zod';

export class GetCatalogProductQueryDto extends createZodDto(GetCatalogProductDetailsCommandRequestQuerySchema) {}
export class GetCatalogProductResponseDto extends createZodDto(GetCatalogProductDetailsCommandResponseSchema) {}
