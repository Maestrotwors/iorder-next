export interface IJWTPayload {
    id: string;
    role: number;
}

export interface TokenResponseDto {
    accessToken: string;
    refreshToken: string;
}
