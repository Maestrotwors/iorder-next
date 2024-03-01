import { Injectable } from '@nestjs/common';
import { TokenService } from './token.service';

@Injectable()
export class RegistrationService {
  constructor(
    private readonly tokenService: TokenService
  ) {}

  /*
  async register(dto: RegisterDto): Promise<RegisterResponseDto | null | 'user_exist'> {
    const { email, name, password } = dto;

    try {
      const existUser = await this.queryBus.execute<GetUserByEmailQuery, UserEntity>(new GetUserByEmailQuery(email));
      if (existUser) {
        return 'user_exist';
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
  }*/
}
