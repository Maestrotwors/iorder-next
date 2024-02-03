import { Module } from '@nestjs/common';
import { BackendModulesAdminController } from './backend-modules-admin.controller';

@Module({
    controllers: [BackendModulesAdminController],
    providers: [],
    exports: [],
})
export class BackendModulesAdminModule {}
