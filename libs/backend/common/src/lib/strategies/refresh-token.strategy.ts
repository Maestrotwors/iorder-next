import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Request } from 'express';
import { IJWTPayload } from '@io/backend/entities';

@Injectable()
export class RefreshTokenStrategy extends PassportStrategy(Strategy, 'refreshTokenStrategy') {
  constructor(private readonly configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      passReqToCallback: true,
      secretOrKey: configService.getOrThrow('REFRESH_TOKEN_JWT_SECRET'),
      signOptions: {
        expiresIn: configService.getOrThrow('REFRESH_TOKEN_EXPIRATION'),
      },
    });
  }

  validate(req: Request, payload: IJWTPayload) {
    const refreshToken = req.get('Authorization')?.replace('Bearer', '').trim() || '';
    req.user = payload;
    return { ...payload, refreshToken };
  }
}
