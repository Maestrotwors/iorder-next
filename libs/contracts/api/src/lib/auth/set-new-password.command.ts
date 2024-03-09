import { z } from 'zod';
import { SetNewPasswordResponseEnum } from './enums/set-new-password.response.enum';

const SetNewPasswordRequestSchema = z.object({
  recoveryToken: z.string(),
  newPassword: z.string(),
});

const SetNewPasswordResponseSchema = z.object({
  status: z.nativeEnum(SetNewPasswordResponseEnum),
});
export const SetNewPasswordCommandRequestSchema = SetNewPasswordRequestSchema;
export type SetNewPasswordCommandRequest = z.infer<typeof SetNewPasswordCommandRequestSchema>;

export const SetNewPasswordCommandResponseSchema = SetNewPasswordResponseSchema;
export type SetNewPasswordCommandResponse = z.infer<typeof SetNewPasswordCommandResponseSchema>;
