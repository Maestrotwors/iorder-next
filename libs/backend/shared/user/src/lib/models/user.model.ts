import { User } from '@prisma/client';

export class UserModel implements User {
  uuid: string = '';
  email: string = '';
  name: string = '';
  role: number = 0;
  passwordHash: string = '';
  recoveryToken: string = '';
  createdAt: Date = new Date();
  updatedAt: Date = new Date();

  constructor(user: Partial<User>) {
    Object.assign(this, user);
    return this;
  }
}
