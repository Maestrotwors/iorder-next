import { z } from 'zod';

const GetCatalogProductsQueryRequestSchema = z.object({
  page: z
    .string()
    .refine(value => /^\d+$/.test(value), { message: 'The input must be a numeric string' })
    .transform(value => parseInt(value, 10)),
  limit: z
    .string()
    .refine(value => /^\d+$/.test(value), { message: 'The input must be a numeric string' })
    .transform(value => parseInt(value, 10)),
  supplierId: z
    .string()
    .refine(value => /^\d+$/.test(value), { message: 'The input must be a numeric string' })
    .transform(value => parseInt(value, 10)),
});

const ProductItemSchema = z.object({
  id: z.number(),
  name: z.string(),
  price: z.number().multipleOf(0.01),
  mainImageUrl: z.string().nullable(),
});

const ProductsSchema = z.object({
  items: z.array(ProductItemSchema),
  totalCountProducts: z.number(),
});

const CatalogDataSchema = z.object({
  products: ProductsSchema,
});

export namespace GetCatalogProductsCommand {
  export const RequestQuerySchema = GetCatalogProductsQueryRequestSchema;
  export type RequestQuery = z.infer<typeof RequestQuerySchema>;

  export const ResponseSchema = CatalogDataSchema;
  export type Response = z.infer<typeof ResponseSchema>;
}
