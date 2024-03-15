import { SetNewPasswordCommandRequestSchema, SetNewPasswordCommandResponseSchema } from '@io/contracts/api';
import { createZodDto } from 'nestjs-zod';

export class SetNewPasswordDto extends createZodDto(SetNewPasswordCommandRequestSchema) {}
export class SetNewPasswordResponseDto extends createZodDto(SetNewPasswordCommandResponseSchema) {}
