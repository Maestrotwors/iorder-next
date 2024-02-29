import { createZodDto } from 'nestjs-zod';
import { ChangePasswordCommand } from '@iorder-next/contracts/api';

export class ChangePasswordDto extends createZodDto(ChangePasswordCommand.RequestSchema) {}
export class ChangePasswordResponseDto extends createZodDto(ChangePasswordCommand.ResponseSchema) {}
