import { User } from '@prisma/client';
import { genSalt, hash, compare } from 'bcryptjs';

export class UserEntity implements User {
    uuid: string = '';
    email: string = '';
    name: string = '';
    role: number = 0;
    passwordHash = '';
    recoveryToken = '';
    createdAt: Date = Date.now() as unknown as Date;
    updatedAt: Date = Date.now() as unknown as Date;

    constructor(user: Partial<User>) {
        Object.assign(this, user);
        return this;
    }

    public async setPassword(password: string): Promise<UserEntity> {
        const salt = await genSalt(10);
        this.passwordHash = await hash(password, salt);
        return this;
    }

    public async validatePassword(password: string): Promise<boolean> {
        return await compare(password, this.passwordHash);
    }
}
