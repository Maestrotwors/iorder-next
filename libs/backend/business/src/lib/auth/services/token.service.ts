import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { RefreshTokenDto } from '../dto/refresh-token.dto';
import { LoginDto } from '../dto/login.dto';
import { IJWTPayload, TokenResponseDto } from '@iorder-next/backend/entities';
import { AuthActionService } from '@iorder-next/backend/commands';

@Injectable()
export class TokenService {
  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
    private readonly authActionService: AuthActionService,
  ) {}

  private accessTokenSecret = this.configService.get<string>('ACCESS_TOKEN_JWT_SECRET') || '';
  private accessTokenExpiration = this.configService.get<string>('ACCESS_TOKEN_EXPIRATION') || '';
  private refreshTokenSecret = this.configService.get<string>('REFRESH_TOKEN_JWT_SECRET') || '';
  private refreshTokenExpiration = this.configService.get<string>('REFRESH_TOKEN_EXPIRATION') || '';

  async validateRefreshToken({ refreshToken }: RefreshTokenDto): Promise<IJWTPayload | null> {
    try {
      return await this.jwtService.verifyAsync<IJWTPayload>(refreshToken, {
        secret: this.refreshTokenSecret,
      });
    } catch (error) {
      return null;
    }
  }

  async validateUser({ email, password }: LoginDto): Promise<IJWTPayload | null> {
    const user = await this.authActionService.getUserByEmail(email);

    if (!user) {
      return null;
    }

    const isCorrectPassword = await user.validatePassword(password);
    if (!isCorrectPassword) {
      return null;
    }

    return { role: user.role, id: user.uuid };
  }

  async getTokens(payload: IJWTPayload): Promise<TokenResponseDto> {
    const [accessToken, refreshToken] = await Promise.all([
      this.createToken(payload, this.accessTokenSecret, this.accessTokenExpiration),
      this.createToken(payload, this.refreshTokenSecret, this.refreshTokenExpiration),
    ]);

    return { accessToken, refreshToken };
  }

  async createToken(payload: IJWTPayload, secret: string, expiresIn: string): Promise<string> {
    return this.jwtService.signAsync(
      {
        payload,
      },
      {
        secret,
        expiresIn,
      },
    );
  }
}
