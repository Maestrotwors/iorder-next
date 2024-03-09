import { SetNewPasswordResponse, SetNewPasswordResponseEnum } from '@iorder-next/contracts/api';
import { ActionBase } from '../../core/action.base';
import { UserRepository } from '@iorder-next/backend/repository';
import { UserEntity } from '@iorder-next/backend/entities';

export class SetNewPasswordCommand extends ActionBase {
  protected readonly userRepository: UserRepository = new UserRepository(this.prismaService);
  async execute(params: { userId: string; newPassword: string }): Promise<SetNewPasswordResponse> {
    try {
      const { userId, newPassword } = params;
      let userEntity = new UserEntity({ uuid: userId });
      userEntity = await userEntity.setPassword(newPassword);
      await this.userRepository.setNewPassword(userEntity.uuid, userEntity.passwordHash);

      return SetNewPasswordResponseEnum.Success;
    } catch (error) {
      this.logger.error(`Error: ${JSON.stringify(error)}`);

      return SetNewPasswordResponseEnum.Error;
    }
  }
}
