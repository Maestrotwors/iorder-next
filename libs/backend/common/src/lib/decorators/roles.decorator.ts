import { SetMetadata, applyDecorators, UseGuards } from '@nestjs/common';
import { AccessTokenGuard } from '../guard/accessToken.guard';
import { RolesGuard } from '../guard/roles.guard';

export enum RoleEnum {
    CUSTOMER = 1,
    SUPPLIER = 2,
    ADMIN = 10
}

export const HasRoles = ([...roles]: RoleEnum[]) => {
    return applyDecorators(SetMetadata('roles', roles), UseGuards(AccessTokenGuard, RolesGuard));
};
