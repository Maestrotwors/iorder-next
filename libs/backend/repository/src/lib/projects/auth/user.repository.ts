import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserEntity } from '@iorder-next/backend/entities';
import { PrismaService } from '@iorder-next/backend/common';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async createUser({ email, name, role, passwordHash }: UserEntity): Promise<User> {
    return this.prisma.user.create({
      data: { email, name, role, passwordHash },
    });
  }

  public async getUserById(uuid: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {
        uuid,
      },
    });
  }

  public async getUserByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  public async getUserByRecoveryToken(recoveryToken: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {
        recoveryToken,
      },
    });
  }

  public async addRecoveryToken(uuid: string, token: string): Promise<User> {
    return this.prisma.user.update({
      where: {
        uuid,
      },
      data: {
        recoveryToken: token,
      },
    });
  }

  public async removeRecoveryToken(uuid: string): Promise<User> {
    return this.prisma.user.update({
      where: {
        uuid,
      },
      data: {
        recoveryToken: null,
      },
    });
  }

  public async setNewPassword(uuid: string, passwordHash: string): Promise<User> {
    return this.prisma.user.update({
      where: {
        uuid,
      },
      data: {
        passwordHash,
      },
    });
  }
}
