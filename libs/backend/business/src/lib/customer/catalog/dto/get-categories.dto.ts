import { GetCatalogCategoriesCommand } from '@iorder-next/contracts/api';
import { createZodDto } from 'nestjs-zod';

export class GetCatalogCategoriesQueryDto extends createZodDto(GetCatalogCategoriesCommand.RequestQuerySchema) {}
export class GetCatalogCategoriesResponseDto extends createZodDto(GetCatalogCategoriesCommand.ResponseSchema) {}
