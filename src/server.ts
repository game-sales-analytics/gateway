import fastify from 'fastify';
import isNil from 'lodash.isnil';
import { pino } from 'pino';
import type { CoreServiceClient } from '../proto-gen/coresrv_grpc_pb';
import type { UsersServiceClient } from '../proto-gen/userssrv_grpc_pb';
import {
  createHandler as createGetGameSalesByRankHandler,
} from './handlers/get-game-sales-by-rank/handle';
import {
  createHandler as createGetTopNGamesOfGenreHandler,
} from './handlers/get-top-n-games-of-genre/handle';
import {
  createHandler as createGetTopNGamesOfYearHandler,
} from './handlers/get-top-n-games-of-year/handle';
import {
  createHandler as createLoginHandler,
} from './handlers/login/handle';
import {
  createHandler as createRegisterHandler,
} from './handlers/register/handle';
import {
  createHandler as createSearchGameSalesByNameHandler,
} from './handlers/search-game-sales-by-name/handle';


export interface Server {
  listen: (host: string, port: number) => Promise<void>;
  stop: () => Promise<void>;
}

export async function initialize(
  usersService: UsersServiceClient,
  coreService: CoreServiceClient,
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

  server.route({
    method: 'GET',
    url: '/games/by-rank',
    handler: createGetGameSalesByRankHandler({
      coreService,
      logger: server.log,
    }),
  });

  server.route({
    method: 'GET',
    url: '/games/by-name',
    handler: createSearchGameSalesByNameHandler({
      coreService,
      logger: server.log,
    }),
  });

  server.route({
    method: 'GET',
    url: '/games/top-in-genre',
    handler: createGetTopNGamesOfGenreHandler({
      coreService,
      logger: server.log,
    }),
  });

  server.route({
    method: 'GET',
    url: '/games/top-in-year',
    handler: createGetTopNGamesOfYearHandler({
      coreService,
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
