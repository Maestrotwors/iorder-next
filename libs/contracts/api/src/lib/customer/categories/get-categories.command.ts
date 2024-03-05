import { z } from 'zod';

const GetCatalogCategoriesQueryRequestSchema = z.object({
  supplierId: z
    .string()
    .refine((value) => /^\d+$/.test(value), { message: "The input must be a numeric string" })
    .transform((value) => parseInt(value, 10)),
});

const CategoryItemSchema = z.object({
  id: z.number().positive(),
  name: z.string(),
  parentId: z.number().positive().nullable(),
  supplierId: z.number().positive()
});

const GetCatalogCategoriesResponseSchema = z.array(CategoryItemSchema);

export namespace GetCatalogCategoriesCommand {
  export const RequestQuerySchema = GetCatalogCategoriesQueryRequestSchema;
  export type RequestQuery = z.infer<typeof RequestQuerySchema>;

  export const ResponseSchema = GetCatalogCategoriesResponseSchema;
  export type Response = z.infer<typeof ResponseSchema>;
}
