import { UserRegisterCommandRequestSchema, UserRegisterCommandResponseSchema } from '@iorder-next/contracts/api';
import { createZodDto } from 'nestjs-zod';

export class RegisterDto extends createZodDto(UserRegisterCommandRequestSchema) {}

export class RegisterResponseDto extends createZodDto(UserRegisterCommandResponseSchema) {}
