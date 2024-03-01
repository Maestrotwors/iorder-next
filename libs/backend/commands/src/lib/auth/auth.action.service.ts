import { Injectable, Logger } from "@nestjs/common";
import { UserRepository } from "@iorder-next/backend/repository";
import { GetUserByEmailQuery } from "./query/get-user-by-email";

@Injectable()
export class AuthActionService {
  getUserByEmail = async (email: string) => await new GetUserByEmailQuery().execute({email});
}
