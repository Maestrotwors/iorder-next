import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { TokenService } from './token.service';
import { LoginDto, LoginResponseDto } from '../dto/login.dto';
import { RefreshTokenDto, RefreshTokenResponseDto } from '../dto/refresh-token.dto';
import { IJWTPayload } from '@iorder-next/backend/entities';
import { ChangePasswordResponseDto } from '../dto/change-password.dto';
import { ChangePasswordResponseEnum } from '@iorder-next/contracts/api';
import { AuthActionService } from '@iorder-next/backend/commands';

@Injectable()
export class AuthService {
  constructor(
    private readonly tokenService: TokenService,
    private readonly authActionService: AuthActionService,
  ) {}

  async login(dto: LoginDto): Promise<LoginResponseDto> {
    const jwtPayload = await this.tokenService.validateUser(dto);
    if (!jwtPayload) {
      throw new BadRequestException('Неверный логин или пароль');
    }
    const tokens = this.tokenService.getTokens(jwtPayload);

    return tokens;
  }

  async refreshToken(dto: RefreshTokenDto): Promise<RefreshTokenResponseDto> {
    const jwtPayload: IJWTPayload | null = await this.tokenService.validateRefreshToken(dto);
    if (!jwtPayload) {
      throw new BadRequestException('Токен не валиден');
    }
    const tokens = this.tokenService.getTokens({
      role: jwtPayload.role,
      id: jwtPayload.id,
    });

    return tokens;
  }

  async changePassword(userId: string, newPassword: string): Promise<ChangePasswordResponseDto> {
    const setNewPassword = await await this.authActionService.setNewPassword(userId, newPassword);

    if (!setNewPassword)
      throw new InternalServerErrorException({
        status: ChangePasswordResponseEnum.Error,
      });

    return {
      status: ChangePasswordResponseEnum.Success,
    };
  }

  /*
  async setNewPassword(dto: SetNewPasswordDto): Promise<SetNewPasswordResponseDto> {
    const existUser = await this.queryBus.execute<GetUserByRecoveryTokenQuery, UserEntity>(
        new GetUserByRecoveryTokenQuery(dto.recoveryToken),
    );

    if (!existUser)
        throw new BadRequestException({
            status: SetNewPasswordResponseEnum.VerificationCodeNotFound,
        });

    const removeRecoveryToken = await this.commandBus.execute<RemoveRecoveryTokenCommand, boolean>(
        new RemoveRecoveryTokenCommand(existUser.uuid),
    );

    if (!removeRecoveryToken)
        throw new InternalServerErrorException({
            status: SetNewPasswordResponseEnum.Error,
        });

    const setNewPassword = await this.commandBus.execute<SetNewPasswordCommand, boolean>(
        new SetNewPasswordCommand(existUser.uuid, dto.newPassword),
    );

    if (!setNewPassword)
        throw new InternalServerErrorException({
            status: SetNewPasswordResponseEnum.Error,
        });

    return {
        status: SetNewPasswordResponseEnum.Success,
    };
  }

  /*
  async passwordRecovery(dto: PasswordRecoveryDto): Promise<PasswordRecoveryResponseDto> {
    const existUser = await this.queryBus.execute<GetUserByEmailQuery, UserEntity>(new GetUserByEmailQuery(dto.email));
    if (!existUser) {
      throw new BadRequestException({
        status: RecoveryPasswordResponseEnum.UserNotFound,
      });
    }
    const recoveryToken = await this.commandBus.execute<GenerateRecoveryTokenCommand, string>(
        new GenerateRecoveryTokenCommand(existUser.uuid),
    );
    const updatedUser = await this.commandBus.execute<AddRecoveryTokenCommand, boolean>(
        new AddRecoveryTokenCommand(existUser.uuid, recoveryToken),
    );
    if (!updatedUser) {
        throw new InternalServerErrorException({
            status: RecoveryPasswordResponseEnum.GenerateVerifyTokenError,
        });
    }
    return {
        status: RecoveryPasswordResponseEnum.Success,
    };
  }



  */
}
