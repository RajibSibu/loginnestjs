import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/login')
  getValidate(data , @Res() res: Response): boolean {
    return res.status(HttpStatus.OK).json([this.appService.validateLogin(data)]);
  }
}
