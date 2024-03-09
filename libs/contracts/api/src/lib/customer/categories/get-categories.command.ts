import { z } from 'zod';

const GetCatalogCategoriesQueryRequestSchema = z.object({
  supplierId: z
    .string()
    .refine(value => /^\d+$/.test(value), { message: 'The input must be a numeric string' })
    .transform(value => parseInt(value, 10)),
});

const CategoryItemSchema = z.object({
  id: z.number().positive(),
  name: z.string(),
  parentId: z.number().positive().nullable(),
  supplierId: z.number().positive(),
});

const GetCatalogCategoriesResponseSchema = z.array(CategoryItemSchema);

export const GetCatalogCategoriesCommandRequestQuerySchema = GetCatalogCategoriesQueryRequestSchema;
export type GetCatalogCategoriesCommandRequestQuery = z.infer<typeof GetCatalogCategoriesCommandRequestQuerySchema>;

export const GetCatalogCategoriesCommandResponseSchema = GetCatalogCategoriesResponseSchema;
export type GetCatalogCategoriesCommandResponse = z.infer<typeof GetCatalogCategoriesCommandResponseSchema>;
