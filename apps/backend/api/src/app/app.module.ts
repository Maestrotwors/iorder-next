import { AuthModule } from '@iorder-next/backend/business';
import { validateConfig } from '@iorder-next/backend/common';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: config => validateConfig(config),
    }),
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
