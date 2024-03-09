import { Injectable } from '@nestjs/common';
import { TokenService } from './token.service';
import { RoleEnum } from '@iorder-next/backend/common';
import { RegisterDto } from '../dto/register.dto';
import { AuthActionService } from '@iorder-next/backend/commands';

@Injectable()
export class RegistrationService {
  constructor(
    private readonly tokenService: TokenService,
    private readonly authActionService: AuthActionService,
  ) {}

  async register(dto: RegisterDto): Promise<true | null | 'user_exist'> {
    const { email, name, password } = dto;

    try {
      const existUser = await this.authActionService.getUserByEmail(email);
      if (existUser) {
        return 'user_exist';
      }
      const role = RoleEnum.CUSTOMER;
      const createdUser = await this.authActionService.createNewUserCommand({ email, name, role, password });

      return createdUser;
    } catch (error) {
      return null;
    }
  }
}
