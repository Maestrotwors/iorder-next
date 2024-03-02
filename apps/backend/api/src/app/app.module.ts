import { AuthModule } from '@iorder-next/backend/business';
import { AccessTokenGuard, AccessTokenStrategy, RefreshTokenStrategy, getJWTConfig, validateConfig } from '@iorder-next/backend/common';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: config => validateConfig(config),
    }),
    //PassportModule.register({ defaultStrategy: 'jwt' }),
    //JwtModule.registerAsync(getJWTConfig()),
    AuthModule
  ],
  controllers: [],
  providers: [
    //AccessTokenStrategy,
    //RefreshTokenStrategy
  ],
})
export class AppModule {}
