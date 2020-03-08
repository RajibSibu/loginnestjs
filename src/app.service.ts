import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  validateLogin(data) : boolean {
    if (data && data.userId === 'rajib' && data.password === 'welcome123') {
      return true;
    } else {
      return false;
    }
  }
}
