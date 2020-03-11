import { Controller, Get, Request, Body, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
class x{
  userId:string;
  password:string

}
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/login')
  getValidate(@Body() data:x) {
    try{
      const result =  this.appService.validateLogin(data);
      return {
        status:true,
        messege:"successfully loggedin.. :)"
      }
    }catch(err){
      
      return {
        status:false,
        messege:err.response.message
      }
    }
   
  }
}
