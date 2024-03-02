import { z } from 'zod';

const UserRegisterRequestSchema = z.object({
    email: z.string().email(),
    name: z.string(),
    password: z.string(),
});

const UserRegisterResponseSchema = z.object({
    created: z.boolean(),
});

export namespace UserRegisterCommand {
    export const RequestSchema = UserRegisterRequestSchema;
    export type Request = z.infer<typeof RequestSchema>;

    export const ResponseSchema = UserRegisterResponseSchema;
    export type Response = z.infer<typeof ResponseSchema>;
}
