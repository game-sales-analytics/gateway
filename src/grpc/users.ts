import { format } from 'node:util';
import { credentials } from '@grpc/grpc-js';
import { UsersServiceClient } from '../../proto-gen/userssrv_grpc_pb';
import { PingRequest } from '../../proto-gen/userssrv_pb';


export interface UsersServiceConnectionConfig {
  readonly host: string;
  readonly port: number;
}

export async function connect(
  config: UsersServiceConnectionConfig,
): Promise<UsersServiceClient> {
  const client = new UsersServiceClient(
    format('%s:%s', config.host, config.port),
    credentials.createInsecure(),
  );

  return await new Promise((resolve, reject) => {
    client.ping(new PingRequest(), error => {
      if (null !== error) {
        console.error('failed pinging users service at: %s:%s', config.host, config.port);
        return reject(error);
      }

      return resolve(client);
    });
  });
}
