import { BadRequestException, Body, Controller, Get, HttpCode, InternalServerErrorException, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from './services/auth.service';
import { RegistrationService } from './services/registration.service';
import { LoginDto, LoginResponseDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly registrationService: RegistrationService
  ) {}
  @Get('ping')
  async ping(@Req() req: Request): Promise<any> {
    return 'test';
  }

  @Post('login')
  async login(@Body() dto: LoginDto): Promise<LoginResponseDto> {
    return this.authService.login(dto);
  }

}


  /*
  @Post('register')
  async register(@Body() dto: RegisterDto): Promise<RegisterResponseDto> {
    const result = await this.registrationService.register(dto);

    if (!result) {
      throw new InternalServerErrorException('Произошла ошибка при попытке регистрации');
    }
    if (result === 'data_exist') {
      throw new BadRequestException('Пользователь с таким email уже существует');
    }

    return result;
  }



  @HttpCode(201)
  @Get('refresh-token')
  @UseGuards(RefreshTokenGuard)
  async refreshToken(@Req() req: Request): Promise<RefreshTokenResponseDto> {
    const dto: RefreshTokenDto | null = req?.user as RefreshTokenDto || null;
    if (!dto) {
        throw new BadRequestException('Токен не валиден');
    }
    return this.authService.refreshToken(dto);
  }

  @Post('password-recovery')
  async passwordRecovery(@Body() dto: PasswordRecoveryDto) {
    return await this.authService.passwordRecovery(dto);
  }

  @Post('set-new-password')
  @HasRoles([RoleEnum.CUSTOMER, RoleEnum.SUPPLIER, RoleEnum.ADMIN])
  async setNewPassword(@Body() dto: SetNewPasswordDto) {
    return await this.authService.setNewPassword(dto);
  }

  @Post('change-password')
  @HasRoles([RoleEnum.CUSTOMER, RoleEnum.SUPPLIER, RoleEnum.ADMIN])
  async changePassword(@User() user: UserContext, @Body() dto: ChangePasswordDto) {
    return await this.authService.changePassword(user.userId, dto.newPassword);
  }
}*/
