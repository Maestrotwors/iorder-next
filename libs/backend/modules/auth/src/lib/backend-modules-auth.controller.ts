import { Controller, Get, HttpCode, Req } from '@nestjs/common';

@Controller('auth')
export class BackendModulesAuthController {
    @Get('ping')
    async ping(@Req() req: Request): Promise<any> {
        return 'test';
    }
}
