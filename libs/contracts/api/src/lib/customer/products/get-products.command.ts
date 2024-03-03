import { z } from 'zod';

const GetCatalogProductsRequestSchema = z.object({});

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
    export const RequestSchema = GetCatalogProductsRequestSchema;
    export type Request = z.infer<typeof RequestSchema>;

    export const ResponseSchema = CatalogDataSchema;
    export type Response = z.infer<typeof ResponseSchema>;
}
