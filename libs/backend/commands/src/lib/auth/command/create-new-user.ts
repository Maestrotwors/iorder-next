import { ActionBase } from '../../core/action.base';
import { UserRepository } from '@io/backend/repository';
import { UserEntity } from '@io/backend/entities';

export class CreateNewUserCommand extends ActionBase {
  protected readonly userRepository: UserRepository = new UserRepository(this.prismaService);
  async execute(params: { email: string; name: string; password: string; role: number }): Promise<true | null> {
    const { email, name, password, role } = params;
    try {
      const userEntity = new UserEntity({ email, name, role });
      userEntity.setPassword(password);
      this.userRepository.createUser(userEntity);
      return true;
    } catch (error) {
      return null;
    }
  }
}
