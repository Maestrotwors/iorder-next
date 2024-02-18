import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BackendModulesAuthModule } from '@iorder-next/backend/modules/auth';

@Module({
    imports: [BackendModulesAuthModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
