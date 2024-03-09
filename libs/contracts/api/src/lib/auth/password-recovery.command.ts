import { z } from 'zod';

const PasswordRecoveryRequestSchema = z.object({
  email: z.string().email(),
});

const PasswordRecoveryResponseSchema = z.object({
  status: z.string(),
});

export const PasswordRecoveryCommandRequestSchema = PasswordRecoveryRequestSchema;
export type PasswordRecoveryCommandRequest = z.infer<typeof PasswordRecoveryCommandRequestSchema>;

export const PasswordRecoveryCommandResponseSchema = PasswordRecoveryResponseSchema;
export type PasswordRecoveryCommandResponse = z.infer<typeof PasswordRecoveryCommandResponseSchema>;
