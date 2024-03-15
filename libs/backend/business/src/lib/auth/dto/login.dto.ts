import { UserLoginCommandRequestSchema, UserLoginCommandResponseSchema } from '@io/contracts/api';
import { createZodDto } from 'nestjs-zod';

export class LoginDto extends createZodDto(UserLoginCommandRequestSchema) {}
export class LoginResponseDto extends createZodDto(UserLoginCommandResponseSchema) {}
