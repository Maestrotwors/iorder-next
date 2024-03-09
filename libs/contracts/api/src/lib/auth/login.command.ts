import { z } from 'zod';

const UserLoginRequestSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

const UserLoginResponseSchema = z.object({
  accessToken: z.string(),
  refreshToken: z.string(),
});

export const UserLoginCommandRequestSchema = UserLoginRequestSchema;
export type UserLoginCommandRequest = z.infer<typeof UserLoginCommandRequestSchema>;

export const UserLoginCommandResponseSchema = UserLoginResponseSchema;
export type UserLoginCommandResponse = z.infer<typeof UserLoginCommandResponseSchema>;
