import { z } from 'zod';

const GetCatalogProductDetailsQueryRequestSchema = z.object({
  productId: z
    .string()
    .refine(value => /^\d+$/.test(value), { message: 'The input must be a numeric string' })
    .transform(value => parseInt(value, 10)),
  supplierId: z
    .string()
    .refine(value => /^\d+$/.test(value), { message: 'The input must be a numeric string' })
    .transform(value => parseInt(value, 10)),
  deliveryPointId: z
    .string()
    .refine(value => /^\d+$/.test(value), { message: 'The input must be a numeric string' })
    .transform(value => parseInt(value, 10)),
  legalEntityId: z
    .string()
    .refine(value => /^\d+$/.test(value), { message: 'The input must be a numeric string' })
    .transform(value => parseInt(value, 10)),
});

const GetCatalogProductDetailsResponseSchema = z.object({
  id: z.number(),
  name: z.string(),
  price: z.number().multipleOf(0.01),
  mainImageUrl: z.string().nullable(),
});

export const GetCatalogProductDetailsCommandRequestQuerySchema = GetCatalogProductDetailsQueryRequestSchema;
export type GetCatalogProductDetailsCommandRequestQuery = z.infer<typeof GetCatalogProductDetailsCommandRequestQuerySchema>;

export const GetCatalogProductDetailsCommandResponseSchema = GetCatalogProductDetailsResponseSchema;
export type GetCatalogProductDetailsCommandResponse = z.infer<typeof GetCatalogProductDetailsCommandResponseSchema>;
