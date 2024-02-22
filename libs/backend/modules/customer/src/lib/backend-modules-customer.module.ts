import { Module } from '@nestjs/common';
import { BackendModulesCustomerController } from './backend-modules-customer.controller';

@Module({
  controllers: [BackendModulesCustomerController],
  providers: [],
  exports: [],
})
export class BackendModulesCustomerModule {}
