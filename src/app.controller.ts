import { Controller, Get, Request, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/login')
  getValidate(@Body() data:any ): boolean {
    return this.appService.validateLogin(data);
  }
}
