import { Module } from '@nestjs/common';
import { RegistrationService } from './services/registration.service';
import { AccessTokenStrategy, DatabaseModule, RefreshTokenStrategy, getJWTConfig } from '@iorder-next/backend/common';
import { AuthService } from './services/auth.service';
import { AuthController } from './auth.controller';
import { TokenService } from './services/token.service';
import { UserRepository } from '@iorder-next/backend/repository';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthActionService } from '@iorder-next/backend/commands';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [DatabaseModule, PassportModule.register({ defaultStrategy: 'jwt' }), JwtModule.registerAsync(getJWTConfig())],
  controllers: [AuthController],
  providers: [
    AuthService,
    TokenService,
    UserRepository,
    RegistrationService,
    AuthActionService,
    JwtService,
    AccessTokenStrategy,
    RefreshTokenStrategy,
  ],
  exports: [AccessTokenStrategy, RefreshTokenStrategy],
})
export class AuthModule {}
