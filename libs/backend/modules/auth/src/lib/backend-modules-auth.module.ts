import { Module } from '@nestjs/common';
import { BackendModulesAuthController } from './backend-modules-auth.controller';
import { RegistrationService } from './services/registration.service';
import { PasswordRecoveryService } from './services/password-recovery.service';
import { AuthService } from './services/auth.service';

@Module({
    controllers: [BackendModulesAuthController],
    providers: [
      AuthService,
      PasswordRecoveryService,
      RegistrationService
    ],
    exports: [],
})
export class BackendModulesAuthModule {}
