import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BackendModulesAuthModule } from '@iorder-next/backend/modules/auth';
import { ConfigModule } from '@nestjs/config';
import { validateConfig } from '@iorder-next/backend/common';
import { UserModule } from '@iorder-next/backend/cqrs/user';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: config => validateConfig(config),
    }),
    BackendModulesAuthModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
