import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
    constructor(
        private readonly queryBus: QueryBus,
        private readonly commandBus: CommandBus,
        private readonly jwtService: JwtService,
        private readonly configService: ConfigService,
    ) {}

    private accessTokenSecret = this.configService.get<string>('ACCESS_TOKEN_JWT_SECRET');
    private accessTokenExpiration = this.configService.get<string>('ACCESS_TOKEN_EXPIRATION');
    private refreshTokenSecret = this.configService.get<string>('REFRESH_TOKEN_JWT_SECRET');
    private refreshTokenExpiration = this.configService.get<string>('REFRESH_TOKEN_EXPIRATION');

    /*
  private async validateRefreshToken({ refreshToken }: RefreshTokenDto): Promise<IJWTPayload | null> {
    try {
        return await this.jwtService.verifyAsync(refreshToken, {
            secret: this.refreshTokenSecret,
        });
    } catch (error) {
        return null;
    }
  }

  private async validateUser({ email, password }: LoginDto): Promise<IJWTPayload> {
    const user = await this.queryBus.execute<GetUserByEmailQuery, UserEntity>(new GetUserByEmailQuery(email));

    if (!user) {
        return null;
    }

    const isCorrectPassword = await user.validatePassword(password);

    if (!isCorrectPassword) {
        return null;
    }

    return { role: user.role, id: user.uuid };
  }

    private async getTokens(payload: IJWTPayload): Promise<TokenResponseDto> {
        const [accessToken, refreshToken] = await Promise.all([
            this.createToken(payload, this.accessTokenSecret, this.accessTokenExpiration),
            this.createToken(payload, this.refreshTokenSecret, this.refreshTokenExpiration),
        ]);

        return { accessToken, refreshToken };
    }

  private async createToken(payload: IJWTPayload, secret: string, expiresIn: string): Promise<string> {
    return this.jwtService.signAsync(
        {
            payload,
        },
        {
            secret,
            expiresIn,
        },
    );
  }*/
}
