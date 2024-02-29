import { UserLoginCommand } from '@iorder-next/contracts/api';
import { createZodDto } from 'nestjs-zod';

export class LoginDto extends createZodDto(UserLoginCommand.RequestSchema) {}
export class LoginResponseDto extends createZodDto(UserLoginCommand.ResponseSchema) {}
