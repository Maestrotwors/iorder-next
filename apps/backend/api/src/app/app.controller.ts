import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Get('products')
  getProducts() {
    return [
      { id: 1, name: 'Product 1', image: "https://picsum.photos/200/300" },
      { id: 2, name: 'Product 2', image: "https://picsum.photos/200/300" },
    ];
  }
}
