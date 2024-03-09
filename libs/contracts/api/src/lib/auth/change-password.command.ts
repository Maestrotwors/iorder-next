import { z } from 'zod';
import { ChangePasswordResponseEnum } from './enums/change-password.response.enum';

const ChangePasswordRequestSchema = z.object({
  newPassword: z.string(),
});

const ChangePasswordResponseSchema = z.object({
  status: z.nativeEnum(ChangePasswordResponseEnum),
});

export const ChangePasswordCommandRequestSchema = ChangePasswordRequestSchema;
export type ChangePasswordCommandRequest = z.infer<typeof ChangePasswordRequestSchema>;

export const ChangePasswordCommandResponseSchema = ChangePasswordResponseSchema;
export type ChangePasswordCommandResponse = z.infer<typeof ChangePasswordResponseSchema>;
