import { UserEntity } from "@iorder-next/backend/entities";
import { GetUserSharedQuery } from "./shared/get-user.shared";

export class GetUserByIdQuery extends GetUserSharedQuery {
  async execute(params: {id: string}): Promise<UserEntity | null> {
    return await this.executeMiddleware(this.userRepository.getUserById(params.id));
  }
}
