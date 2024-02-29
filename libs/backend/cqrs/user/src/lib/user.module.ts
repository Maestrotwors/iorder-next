import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { CqrsModule } from '@nestjs/cqrs';
import { JwtService } from '@nestjs/jwt';
import { DatabaseModule } from '@iorder-next/backend/common';
import { COMMANDS } from './command';
import { QUERIES } from './query';
import { PrismaService } from '@iorder-next/backend/core/db';

@Module({
    imports: [DatabaseModule, CqrsModule],
    controllers: [UserController],
    providers: [...QUERIES, ...COMMANDS, UserRepository, JwtService, PrismaService],
})
export class UserModule {}
