import { PasswordRecoveryCommandRequestSchema, PasswordRecoveryCommandResponseSchema } from '@iorder-next/contracts/api';
import { createZodDto } from 'nestjs-zod';

export class PasswordRecoveryDto extends createZodDto(PasswordRecoveryCommandRequestSchema) {}
export class PasswordRecoveryResponseDto extends createZodDto(PasswordRecoveryCommandResponseSchema) {}
