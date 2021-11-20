import fastify from 'fastify';
import { pino } from 'pino';
import type { UsersServiceClient } from '../proto-gen/userssrv_grpc_pb';
import handleLogin from './handlers/login/handle';
import { isNil } from '.pnpm/@types+lodash@4.14.177/node_modules/@types/lodash';


export interface Server {
  listen: (host: string, port: number) => Promise<void>;
  stop: () => Promise<void>;
}

export async function initialize(
  usersService: UsersServiceClient,
): Promise<Server> {
  const server = fastify({
    logger: pino({
      transport: {
        target: 'pino-pretty',
        options: {
          colorize: true,
          crlf: false,
          levelFirst: true,
          translateTime: true,
        },
      },
      timestamp: pino.stdTimeFunctions.isoTime,
      level: 'trace',
    }),
  });


  server.route({
    method: 'POST',
    url: '/auth/login',
    handler: handleLogin,
  });

  return await Promise.resolve({
    listen: async (host, port) => await new Promise((resolve, reject) => {
      server.listen(port, host, error => {
        if (!isNil(error)) {
          return reject(error);
        }

        return resolve();
      });
    }),
    stop: async () => {
      await server.close();
    },
  });
}
