import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  validateLogin(data) : boolean {
    if (data && data.userId === 'rajib' && data.password === 'welcome123') {
      return true;
    } else {
      return false;
    }
}
