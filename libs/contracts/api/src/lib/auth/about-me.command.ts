import { z } from 'zod';

const UserAboutMeRequestSchema = z.object({});

const UserAboutMeResponseSchema = z.object({
    uuid: z.string(),
    name: z.string(),
    email: z.string(),
});

export namespace UserAboutMeCommand {
    export const RequestSchema = UserAboutMeRequestSchema;
    export type Request = z.infer<typeof RequestSchema>;

    export const ResponseSchema = UserAboutMeResponseSchema;
    export type Response = z.infer<typeof ResponseSchema>;
}
