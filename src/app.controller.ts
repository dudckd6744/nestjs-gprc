import { Metadata } from '@grpc/grpc-js';
import { Controller, Get } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @GrpcMethod('AppController')
  async person(id: number, data: Metadata) {
    console.log(id, data);

    const test = await this.appService.getHello();
    console.log(test);
    return test;
  }
}
