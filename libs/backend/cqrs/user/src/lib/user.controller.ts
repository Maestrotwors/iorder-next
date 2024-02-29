import { Controller, Get } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { UserAboutMeResponseDto } from './dto/about-me.dto';
import { GetUserInfoQuery } from './query/get-user-info';
import { HasRoles, RoleEnum, User } from '@iorder-next/backend/common';

@Controller('user')
export class UserController {
    constructor(private readonly queryBus: QueryBus) {}

    /*@HasRoles([RoleEnum.USER])
    @Get('me')
    async getUserInfo(@User() user: UserContext): Promise<UserAboutMeResponseDto> {
        return this.queryBus.execute<GetUserInfoQuery>(new GetUserInfoQuery(user.userId));
    }*/
}
