import { Metadata } from '@grpc/grpc-js';
import { Controller, Get } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AppService } from './app.service';

interface reqTest {
  name: string;
}
interface resTest {
  name: string;
  message: string;
}
@Controller('test')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @GrpcMethod('AppController')
  async Test(name: reqTest, data: Metadata): Promise<resTest> {
    console.log(name);
    return this.appService.getHello();
    return { ...name, message: 'hellow Word!' };
  }
}
