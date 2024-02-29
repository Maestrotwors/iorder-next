import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetUserByIdQuery } from './get-user-by-id.query';
import { UserRepository } from '../../user.repository';
import { User } from '@prisma/client';

@QueryHandler(GetUserByIdQuery)
export class GetUserByIdHandler implements IQueryHandler<GetUserByIdQuery> {
    constructor(private readonly userRepository: UserRepository) {}
    async execute({ id }: GetUserByIdQuery): Promise<User | null> {
      try {
        const user = await this.userRepository.getUserById(id);
        if (!user) {
            return null;
        }

        return user;
    } catch (error) {
        return null;
    }
  }
}
