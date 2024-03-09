import { UserEntity } from '@iorder-next/backend/entities';
import { GetUserSharedQuery } from './shared/get-user.shared';

export class GetUserByRecoveryTokenQuery extends GetUserSharedQuery {
  async execute(params: { recoveryToken: string }): Promise<UserEntity | null> {
    return await this.executeMiddleware(this.userRepository.getUserByRecoveryToken(params.recoveryToken));
  }
}
