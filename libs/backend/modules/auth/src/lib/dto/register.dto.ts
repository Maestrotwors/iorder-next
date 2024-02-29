import { UserRegisterCommand } from '@iorder-next/contracts/api';
import { createZodDto } from 'nestjs-zod';

export class RegisterDto extends createZodDto(UserRegisterCommand.RequestSchema) {}

export class RegisterResponseDto extends createZodDto(UserRegisterCommand.ResponseSchema) {}
