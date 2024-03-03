
import { GetCatalogProductsCommand } from '@iorder-next/contracts/api';
import { createZodDto } from 'nestjs-zod';

export class GetCatalogProductsDto extends createZodDto(GetCatalogProductsCommand.RequestSchema) {}
export class GetCatalogProductsResponseDto extends createZodDto(GetCatalogProductsCommand.ResponseSchema) {}
