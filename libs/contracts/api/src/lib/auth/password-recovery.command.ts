import { z } from 'zod';

const PasswordRecoveryRequestSchema = z.object({
  email: z.string().email(),
});

const PasswordRecoveryResponseSchema = z.object({
  status: z.string(),
});

export namespace PasswordRecoveryCommand {
  export const RequestSchema = PasswordRecoveryRequestSchema;
  export type Request = z.infer<typeof RequestSchema>;

  export const ResponseSchema = PasswordRecoveryResponseSchema;
  export type Response = z.infer<typeof ResponseSchema>;
}
