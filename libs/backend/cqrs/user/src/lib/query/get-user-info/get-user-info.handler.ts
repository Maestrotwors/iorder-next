import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { UserRepository } from '../../user.repository';
import { GetUserInfoQuery } from './get-user-info.query';
import { UserAboutMeResponseDto } from '../../dto/about-me.dto';

@QueryHandler(GetUserInfoQuery)
export class GetUserInfoHandler implements IQueryHandler<GetUserInfoQuery> {
    constructor(private readonly userRepository: UserRepository) {}
    async execute({ id }: GetUserInfoQuery): Promise<UserAboutMeResponseDto | null> {
      const user = await this.userRepository.getUserById(id);
      if (!user) {
          return null;
      }
      return {
          uuid: user.uuid,
          email: user.email,
          name: user.name,
      };
    }
}
