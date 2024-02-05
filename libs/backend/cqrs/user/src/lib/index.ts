import { CreateUserHandler } from './command/create-user';
import { SetNewPasswordHandler } from './command/set-new-password';
import { AddRecoveryTokenHandler } from './command/add-recovery-token';
import { RemoveRecoveryTokenHandler } from './command/remove-recovery-token';
import { GenerateRecoveryTokenHandler } from './command/generate-recovery-token';

export const COMMANDS = [
    CreateUserHandler,
    SetNewPasswordHandler,
    AddRecoveryTokenHandler,
    RemoveRecoveryTokenHandler,
    GenerateRecoveryTokenHandler,
];
