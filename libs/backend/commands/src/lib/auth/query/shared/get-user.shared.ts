import { UserEntity } from "@iorder-next/backend/entities";
import { UserRepository } from "@iorder-next/backend/repository";
import { ActionBase } from "../../../core/action.base";
import { User } from "@prisma/client";

export abstract class GetUserSharedQuery extends ActionBase {
  protected readonly userRepository: UserRepository = new UserRepository(this.prismaService);

  protected async executeMiddleware(fn: Promise<User | null>): Promise<UserEntity | null> {
    try {
      const user = await fn;
      if (!user) {
        return null;
      }
      const userEntity = new UserEntity(user);

      return userEntity;
    } catch (error) {
      this.logger.error(error);
      return null;
    }
  }
}
