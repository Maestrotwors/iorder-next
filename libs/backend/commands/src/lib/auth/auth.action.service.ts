import { Injectable } from '@nestjs/common';
import { GetUserByEmailQuery } from './query/get-user-by-email';
import { GetUserByIdQuery } from './query/get-user-by-id';
import { GetUserByRecoveryTokenQuery } from './query/get-user-by-recovery-token';
import { SetNewPasswordCommand } from './command/set-new-password';
import { CreateNewUserCommand } from './command/create-new-user';

@Injectable()
export class AuthActionService {
  getUserByEmail = async (email: string) => await new GetUserByEmailQuery().execute({ email });
  getUserById = async (id: string) => await new GetUserByIdQuery().execute({ id });
  getUserByRecoveryToken = async (recoveryToken: string) => await new GetUserByRecoveryTokenQuery().execute({ recoveryToken });

  setNewPassword = async (userId: string, newPassword: string) => await new SetNewPasswordCommand().execute({ userId, newPassword });
  createNewUserCommand = async (params: { email: string; name: string; role: number; password: string }) =>
    await new CreateNewUserCommand().execute(params);
}
