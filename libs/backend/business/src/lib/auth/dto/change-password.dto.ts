import { ChangePasswordCommandRequestSchema, ChangePasswordCommandResponseSchema } from '@io/contracts/api';
import { createZodDto } from 'nestjs-zod';

export class ChangePasswordDto extends createZodDto(ChangePasswordCommandRequestSchema) {}
export class ChangePasswordResponseDto extends createZodDto(ChangePasswordCommandResponseSchema) {}
