import { GetCatalogCategoriesCommandRequestQuerySchema, GetCatalogCategoriesCommandResponseSchema } from '@io/contracts/api';
import { createZodDto } from 'nestjs-zod';

export class GetCatalogCategoriesQueryDto extends createZodDto(GetCatalogCategoriesCommandRequestQuerySchema) {}
export class GetCatalogCategoriesResponseDto extends createZodDto(GetCatalogCategoriesCommandResponseSchema) {}
