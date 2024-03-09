import { z } from 'zod';

const UserRefreshTokenRequestSchema = z.object({
  refreshToken: z.string(),
});

const UserRefreshTokenResponseSchema = z.object({
  accessToken: z.string(),
  refreshToken: z.string(),
});

export const UserRefreshTokenCommandRequestSchema = UserRefreshTokenRequestSchema;
export type UserRefreshTokenCommandRequest = z.infer<typeof UserRefreshTokenCommandRequestSchema>;

export const UserRefreshTokenCommandResponseSchema = UserRefreshTokenResponseSchema;
export type UserRefreshTokenCommandResponse = z.infer<typeof UserRefreshTokenCommandResponseSchema>;
