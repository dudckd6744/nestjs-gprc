import { Transport, ClientOptions } from '@nestjs/microservices';
import { join } from 'path';

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'Person',
    protoPath: join(__dirname, '../../../proto/person.proto'),
  },
};
