import { Module } from '@nestjs/common';
import { RegistrationService } from './services/registration.service';
import { AccessTokenStrategy, DatabaseModule, PrismaService, RefreshTokenStrategy } from '@iorder-next/backend/common';
import { AuthService } from './services/auth.service';
import { AuthController } from './auth.controller';
import { PasswordRecoveryService } from './services/password-recovery.service';
import { TokenService } from './services/token.service';
import { UserRepository } from '@iorder-next/backend/repository';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthActionService } from '@iorder-next/backend/commands';

@Module({
  imports: [DatabaseModule],
  controllers: [AuthController],
  providers: [
    AuthService,
    TokenService,
    JwtService,
    UserRepository,
    RegistrationService,
    AuthActionService
  ],
  exports: [],
})
export class AuthModule {}
