import { Module } from '@nestjs/common';
import { BackendModulesAuthController } from './backend-modules-auth.controller';

@Module({
    controllers: [BackendModulesAuthController],
    providers: [],
    exports: [],
})
export class BackendModulesAuthModule {}
