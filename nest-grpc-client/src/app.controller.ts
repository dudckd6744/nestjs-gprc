import { Controller, Get, OnModuleInit, Query } from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { AppService } from './app.service';
import { grpcClientOptions } from './common/grpc.options';

interface testService {
  Test({ name: string }): Observable<any>;
}

@Controller()
export class AppController implements OnModuleInit {
  // constructor(private readonly appService: AppService) {}
  @Client(grpcClientOptions) private client: ClientGrpc;

  private test: testService;

  onModuleInit() {
    this.test = this.client.getService('AppController');
  }

  @Get()
  getHello(@Query('name') name: string): Observable<any> {
    return this.test.Test({ name });
  }
}
