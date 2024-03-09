import { PrismaService } from '@iorder-next/backend/common';
import { Logger } from '@nestjs/common';

export abstract class ActionBase {
  protected readonly prismaService: PrismaService = new PrismaService();
  protected readonly logger = new Logger(ActionBase.name);

  abstract execute(params: unknown): Promise<unknown>;
}
