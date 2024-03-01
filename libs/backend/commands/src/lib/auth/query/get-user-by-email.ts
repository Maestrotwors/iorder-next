import { UserEntity } from "@iorder-next/backend/entities";
import { UserRepository } from "@iorder-next/backend/repository";
import { ActionBase } from "../../core/action.base";

export class GetUserByEmailQuery extends ActionBase {
  private readonly userRepository: UserRepository = new UserRepository(this.prismaService);

  async execute(params: {email: string}): Promise<UserEntity | null>{
    try {
      const user = await this.userRepository.getUserByEmail(params.email.toLowerCase());
      if (!user) {
        return null;
      }

      const userEntity = new UserEntity(user);
      userEntity.emailToLowerCase();

      return userEntity;
    } catch (error) {
      this.logger.error(error);
      return null;
    }
  }
}
