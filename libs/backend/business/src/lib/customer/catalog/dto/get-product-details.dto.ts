import { GetCatalogProductDetailsCommand } from '@iorder-next/contracts/api';
import { createZodDto } from 'nestjs-zod';

export class GetCatalogProductQueryDto extends createZodDto(GetCatalogProductDetailsCommand.RequestQuerySchema) {}
export class GetCatalogProductResponseDto extends createZodDto(GetCatalogProductDetailsCommand.ResponseSchema) {}
