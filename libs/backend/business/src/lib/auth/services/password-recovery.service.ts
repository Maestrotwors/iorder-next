import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PasswordRecoveryService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

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
      }

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
    }*/
}
