import { Body, Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('catalog')
export class CatalogController {
  constructor() {}
  @Get('health-check')
  async ping(@Req() req: Request): Promise<any> {
    return 'ping';
  }

  @Get('products')
  async login(@Body() dto: any): Promise<any> {
    return  true;
  }

}
