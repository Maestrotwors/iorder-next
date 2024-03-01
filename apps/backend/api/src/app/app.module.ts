import { AuthModule } from '@iorder-next/backend/business';
import { getJWTConfig, validateConfig } from '@iorder-next/backend/common';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: config => validateConfig(config),
    }),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync(getJWTConfig()),
    AuthModule
  ],
  controllers: [],
  providers: [

  ],
})
export class AppModule {}
