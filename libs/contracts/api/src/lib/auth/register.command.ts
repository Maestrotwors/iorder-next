import { z } from 'zod';

const UserRegisterRequestSchema = z.object({
  email: z.string().email(),
  name: z.string(),
  password: z.string(),
});

const UserRegisterResponseSchema = z.object({
  created: z.boolean(),
});

export const UserRegisterCommandRequestSchema = UserRegisterRequestSchema;
export type UserRegisterCommandRequest = z.infer<typeof UserRegisterCommandRequestSchema>;

export const UserRegisterCommandResponseSchema = UserRegisterResponseSchema;
export type UserRegisterCommandResponse = z.infer<typeof UserRegisterCommandResponseSchema>;
