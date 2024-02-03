import { Injectable } from "@nestjs/common";
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class RegistrationService {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) { }

  private accessTokenSecret = this.configService.get<string>('ACCESS_TOKEN_JWT_SECRET');
  private accessTokenExpiration = this.configService.get<string>('ACCESS_TOKEN_EXPIRATION');
  private refreshTokenSecret = this.configService.get<string>('REFRESH_TOKEN_JWT_SECRET');
  private refreshTokenExpiration = this.configService.get<string>('REFRESH_TOKEN_EXPIRATION');

  /*
  async register(dto: RegisterDto): Promise<RegisterResponseDto> {
    const { email, name, password } = dto;

    try {
        const existUser = await this.queryBus.execute<GetUserByEmailQuery, UserEntity>(new GetUserByEmailQuery(email));
        if (existUser) {
            throw new BadRequestException('Пользователь с таким email уже существует');
        }
        const role = RoleEnum.USER;
        const createdUser = await this.commandBus.execute<CreateUserCommand, User>(new CreateUserCommand(email, name, role, password));
        const tokens = this.getTokens({
            role: createdUser.role,
            id: createdUser.uuid,
        });

        return tokens;
    } catch (error) {
        return null;
    }
  }*/
}
