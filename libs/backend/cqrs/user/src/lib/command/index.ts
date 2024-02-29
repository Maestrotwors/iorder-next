import { CreateUserHandler } from './create-user';
import { SetNewPasswordHandler } from './set-new-password';
import { AddRecoveryTokenHandler } from './add-recovery-token';
import { RemoveRecoveryTokenHandler } from './remove-recovery-token';
import { GenerateRecoveryTokenHandler } from './generate-recovery-token';

export * from './add-recovery-token';
export * from './create-user';
export * from './generate-recovery-token';
export * from './remove-recovery-token';
export * from './set-new-password';

export const COMMANDS = [
    CreateUserHandler,
    SetNewPasswordHandler,
    AddRecoveryTokenHandler,
    RemoveRecoveryTokenHandler,
    GenerateRecoveryTokenHandler,
];
