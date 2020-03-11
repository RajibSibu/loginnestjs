import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class AppService {
  validateLogin(data) {
    if (data && data.userId === 'rajib' && data.password === 'welcome123') {
     return true;
    } else {
     throw new NotFoundException("user not fond..")
    }
  }
}
