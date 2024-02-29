import { UserAboutMeCommand } from '@iorder-next/contracts/api';
import { createZodDto } from 'nestjs-zod';

export class UserAboutMeDto extends createZodDto(UserAboutMeCommand.RequestSchema) {}
export class UserAboutMeResponseDto extends createZodDto(UserAboutMeCommand.ResponseSchema) {}
