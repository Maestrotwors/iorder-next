import { UserEntity } from '@io/backend/entities';
import { GetUserSharedQuery } from './shared/get-user.shared';

export class GetUserByEmailQuery extends GetUserSharedQuery {
  async execute(params: { email: string }): Promise<UserEntity | null> {
    return await this.executeMiddleware(this.userRepository.getUserByEmail(params.email.toLowerCase()));
  }
}
