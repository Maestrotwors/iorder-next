import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { RefreshTokenDto, RefreshTokenResponseDto } from '../dto/refresh-token.dto';
import { LoginDto, LoginResponseDto } from '../dto/login.dto';
import { IJWTPayload } from '../types/auth.interface';
import { UserEntity, GetUserByEmailQuery, SetNewPasswordCommand, GetUserByRecoveryTokenQuery, RemoveRecoveryTokenCommand, GenerateRecoveryTokenCommand, AddRecoveryTokenCommand } from '@iorder-next/backend/cqrs/user';
import { SetNewPasswordResponseEnum } from '../constants/set-new-password.response.enum';
import { RecoveryPasswordResponseEnum } from '../constants/recovery-password.response.enum';
import { ChangePasswordResponseDto } from '../dto/change-password.dto';
import { ChangePasswordResponseEnum } from '@iorder-next/contracts/api';
import { SetNewPasswordDto, SetNewPasswordResponseDto } from '../dto/set-new-password.dto';
import { PasswordRecoveryDto, PasswordRecoveryResponseDto } from '../dto/password-recovery.dto';
import { TokenService } from './token.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
    private readonly tokenService: TokenService
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
    /*
    const emailHtml = await this.commandBus.execute<GenerateEmailHTMLCommand<RestoreTemplateData>, string>(
        new GenerateEmailHTMLCommand({ token: recoveryToken }, Template.RecoverPassword),
    );
    if (!emailHtml) {
        throw new InternalServerErrorException({
            status: RecoveryPasswordResponseEnum.GenerateHtmlError,
        });
    }
    const emailResponse = await this.commandBus.execute<EmailSendCommand, EmailSendResponse | null>(
        new EmailSendCommand(existUser.email, 'noreply@purplecode.ru', 'Ratingus', 'Восстановление пароля. Ratingus.ru', emailHtml),
    );
    if (!emailResponse) {
        throw new InternalServerErrorException({
            status: RecoveryPasswordResponseEnum.SendEmailError,
        });
    }*/

    return {
        status: RecoveryPasswordResponseEnum.Success,
    };
  }

  async changePassword(userId: string, newPassword: string): Promise<ChangePasswordResponseDto> {
      const setNewPassword = await this.commandBus.execute<SetNewPasswordCommand, boolean>(
          new SetNewPasswordCommand(userId, newPassword),
      );

      if (!setNewPassword)
          throw new InternalServerErrorException({
              status: ChangePasswordResponseEnum.Error,
          });

      return {
          status: ChangePasswordResponseEnum.Success,
      };
  }

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
}
