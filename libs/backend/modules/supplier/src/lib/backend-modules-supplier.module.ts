import { Module } from '@nestjs/common';
import { BackendModulesSupplierController } from './backend-modules-supplier.controller';

@Module({
    controllers: [BackendModulesSupplierController],
    providers: [],
    exports: [],
})
export class BackendModulesSupplierModule {}
