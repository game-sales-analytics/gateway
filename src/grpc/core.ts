import { credentials, Metadata } from '@grpc/grpc-js';
import { Status } from '@grpc/grpc-js/build/src/constants';
import { format } from 'node:util';
import { CoreServiceClient } from '../../proto-gen/coresrv_grpc_pb';
import { PingRequest } from '../../proto-gen/coresrv_pb';


export interface CoreServiceConnectionConfig {
  readonly host: string;
  readonly port: number;
}

export async function connect(
  config: CoreServiceConnectionConfig,
): Promise<CoreServiceClient> {
  const client = new CoreServiceClient(
    format('%s:%s', config.host, config.port),
    credentials.createInsecure(),
  );

  return await new Promise((resolve, reject) => {
    const metaData = new Metadata({ idempotentRequest: true });
    metaData.add('auth', 'asd');
    client.ping(new PingRequest(), metaData, error => {
      if (null !== error && error.code !== Status.UNAUTHENTICATED) {
        return reject(error);
      }

      return resolve(client);
    });
  });
}
