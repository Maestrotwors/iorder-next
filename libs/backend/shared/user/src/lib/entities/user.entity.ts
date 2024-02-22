import { genSalt, hash, compare } from 'bcryptjs';
import { UserModel } from '../models/user.model';

export class UserEntity extends UserModel {
  constructor(user: Partial<UserModel>) {
    super(user);
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
