import { UserRefreshTokenCommand } from '@iorder-next/contracts/api';
import { createZodDto } from 'nestjs-zod';

export class RefreshTokenDto extends createZodDto(UserRefreshTokenCommand.RequestSchema) {}

export class RefreshTokenResponseDto extends createZodDto(UserRefreshTokenCommand.ResponseSchema) {}
