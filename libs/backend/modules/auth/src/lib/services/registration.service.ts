import { BadRequestException, Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { RegisterDto, RegisterResponseDto } from '../dto/register.dto';
import { CreateUserCommand, GetUserByEmailQuery, UserEntity } from '@iorder-next/backend/cqrs/user';
import { RoleEnum } from '@iorder-next/backend/common';
import { User } from '@prisma/client';
import { TokenService } from './token.service';

@Injectable()
export class RegistrationService {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
    private readonly tokenService: TokenService
  ) {}

  async register(dto: RegisterDto): Promise<RegisterResponseDto | null | 'data_exist'> {
    const { email, name, password } = dto;

    try {
      const existUser = await this.queryBus.execute<GetUserByEmailQuery, UserEntity>(new GetUserByEmailQuery(email));
      if (existUser) {
        return 'data_exist';
      }
      const role = RoleEnum.CUSTOMER;
      const createdUser = await this.commandBus.execute<CreateUserCommand, User>(new CreateUserCommand(email, name, role, password));
      const tokens = this.tokenService.getTokens({
        role: createdUser.role,
        id: createdUser.uuid,
      });

      return tokens;
    } catch (error) {
      return null;
    }
  }
}
