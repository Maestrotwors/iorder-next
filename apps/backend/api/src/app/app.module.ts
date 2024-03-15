import { AuthModule, CatalogModule } from '@io/backend/business';
import { validateConfig } from '@io/backend/common';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: config => validateConfig(config),
    }),
    AuthModule,
    CatalogModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
