import { UserRefreshTokenCommandRequestSchema, UserRefreshTokenCommandResponseSchema } from '@io/contracts/api';
import { createZodDto } from 'nestjs-zod';

export class RefreshTokenDto extends createZodDto(UserRefreshTokenCommandRequestSchema) {}

export class RefreshTokenResponseDto extends createZodDto(UserRefreshTokenCommandResponseSchema) {}
