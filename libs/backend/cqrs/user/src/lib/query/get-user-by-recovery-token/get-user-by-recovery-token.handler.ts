import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { UserRepository } from '../../user.repository';
import { User } from '@prisma/client';
import { GetUserByRecoveryTokenQuery } from './get-user-by-recovery-token.query';

@QueryHandler(GetUserByRecoveryTokenQuery)
export class GetUserByRecoveryTokenHandler implements IQueryHandler<GetUserByRecoveryTokenQuery> {
    constructor(private readonly userRepository: UserRepository) {}
    async execute({ recoveryToken }: GetUserByRecoveryTokenQuery): Promise<User | null> {
      try {
        const user = await this.userRepository.getUserByRecoveryToken(recoveryToken);
        if (!user) {
            return null;
        }

        return user;
      } catch (error) {
        return null;
      }
    }
}
