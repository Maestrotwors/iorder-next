import { Module } from '@nestjs/common';
import { BackendModulesAuthController } from './backend-modules-auth.controller';
import { RegistrationService } from './services/registration.service';
import { PasswordRecoveryService } from './services/password-recovery.service';
import { AuthService } from './services/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { CqrsModule } from '@nestjs/cqrs';
import { getJWTConfig } from '@iorder-next/backend/common';
import { TokenService } from './services/token.service';

@Module({
  imports: [
    CqrsModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync(getJWTConfig())
  ],
  controllers: [BackendModulesAuthController],
  providers: [
    AuthService,
    RegistrationService,
    PasswordRecoveryService,
    TokenService],
  exports: [PassportModule, AuthService],
})
export class BackendModulesAuthModule {}
