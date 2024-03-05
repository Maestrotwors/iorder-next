import { z } from 'zod';

const GetCatalogProductDetailsQueryRequestSchema = z.object({
  productId: z
    .string()
    .refine((value) => /^\d+$/.test(value), { message: "The input must be a numeric string" })
    .transform((value) => parseInt(value, 10)),
});

const GetCatalogProductDetailsResponseSchema = z.object({
  id: z.number(),
  name: z.string(),
  price: z.number().multipleOf(0.01),
  mainImageUrl: z.string().nullable()
});


export namespace GetCatalogProductDetailsCommand {
  export const RequestQuerySchema = GetCatalogProductDetailsQueryRequestSchema;
  export type RequestQuery = z.infer<typeof RequestQuerySchema>;

  export const ResponseSchema = GetCatalogProductDetailsResponseSchema;
  export type Response = z.infer<typeof ResponseSchema>;
}
