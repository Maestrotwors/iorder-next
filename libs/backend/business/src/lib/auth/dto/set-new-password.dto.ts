import { SetNewPasswordCommand } from '@iorder-next/contracts/api';
import { createZodDto } from 'nestjs-zod';

export class SetNewPasswordDto extends createZodDto(SetNewPasswordCommand.RequestSchema) {}
export class SetNewPasswordResponseDto extends createZodDto(SetNewPasswordCommand.ResponseSchema) {}
