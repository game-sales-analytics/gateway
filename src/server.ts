import fastify from 'fastify';
import isNil from 'lodash.isnil';
import { pino } from 'pino';
import type { UsersServiceClient } from '../proto-gen/userssrv_grpc_pb';
import { createHandler as createLoginHandler } from './handlers/login/handle';
import { createHandler as createRegisterHandler } from './handlers/register/handle';


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
    handler: createLoginHandler({
      usersService,
      logger: server.log,
    }),
  });

  server.route({
    method: 'POST',
    url: '/auth/register',
    handler: createRegisterHandler({
      usersService,
      logger: server.log,
    }),
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
