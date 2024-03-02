import { IJWTPayload, UserContext } from '@iorder-next/backend/entities';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class AccessTokenStrategy extends PassportStrategy(Strategy, 'accessTokenStrategy') {
  constructor(
    private readonly configService: ConfigService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.getOrThrow('ACCESS_TOKEN_JWT_SECRET'),
      signOptions: {
        expiresIn: configService.getOrThrow('ACCESS_TOKEN_EXPIRATION'),
      }
    });
  }

  async validate(data: { payload: IJWTPayload }): Promise<UserContext> {
    return {
      userId: data.payload.id,
      userRole: data.payload.role,
    };
  }
}
