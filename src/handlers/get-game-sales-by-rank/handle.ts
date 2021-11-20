import type { ServiceError } from '@grpc/grpc-js';
import { Metadata } from '@grpc/grpc-js';
import { Status } from '@grpc/grpc-js/build/src/constants';
import type {
  FastifyLoggerInstance,
  FastifyRequest,
  FastifyReply,
  RouteHandlerMethod,
} from 'fastify';
import { StatusCodes } from 'http-status-codes';
import isNil from 'lodash.isnil';
import type { CoreServiceClient } from '../../../proto-gen/coresrv_grpc_pb';
import type { GetGameSalesByRankReply } from '../../../proto-gen/coresrv_pb';
import { GetGameSalesByRankRequest } from '../../../proto-gen/coresrv_pb';
import { extractAuthHeader } from '../../auth/authenticate';
import { ValidationError } from '../../validator/validate';
import validate from './validate';


interface RequestQuery {
  readonly rank: number;
}

function parseRequestQuery(query: unknown): RequestQuery {
  const m = new Map(Object.entries(query as Record<string, unknown>));

  return {
    rank: m.get('rank') as number,
  };
}

export interface CreateHandlerDeps {
  readonly coreService: CoreServiceClient;
  readonly logger: FastifyLoggerInstance;
}

function tryExtractAuthHeader(request: FastifyRequest): [boolean, string] {
  try {
    const authHeader = request.headers.authorization;
    return [true, extractAuthHeader(authHeader)];
  } catch {
    return [false, ''];
  }
}

export function createHandler(
  deps: CreateHandlerDeps,
): RouteHandlerMethod {
  async function handle(
    request: FastifyRequest,
    reply: FastifyReply,
  ): Promise<void> {
    const [extracted, authToken] = tryExtractAuthHeader(request);
    if (!extracted) {
      await reply.status(StatusCodes.UNAUTHORIZED).send('missing or invalid Authorization header');
    }

    try {
      if (isNil(request.query)) {
        throw new ValidationError([{
          code: 'E_QUERY_EMPTY',
          path: '.',
        }]);
      }

      validate((request.query as Record<string, unknown>)['rank']);
    } catch (error: unknown) {
      if (error instanceof ValidationError) {
        await reply.status(StatusCodes.BAD_REQUEST).send({
          error: 'E_INVALID_QUERY',
          details: error.items,
        });
        return;
      }

      await reply.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
        error: 'E_INTERNAL',
        details: 'internal error occurred. please try again later.',
      });
      return;
    }

    const query = parseRequestQuery(request.query);
    const grpcRequest = new GetGameSalesByRankRequest()
      .setRank(query.rank);

    await new Promise<[ServiceError | null, GetGameSalesByRankReply]>(
      resolve => {
        const meta = new Metadata({ idempotentRequest: true });
        meta.set('auth', authToken);
        deps.coreService.getGameSalesByRank(
          grpcRequest,
          meta,
          (grpcError, grpcResponse) => {
            resolve([grpcError, grpcResponse]);
          },
        );
      },
    )
      .then(async ([error, response]) => {
        if (!isNil(error)) {
          switch (error.code) {
            case Status.UNAUTHENTICATED:
              return await reply
                .status(StatusCodes.UNAUTHORIZED)
                .send({ message: 'authentication failed.' });
            case Status.INTERNAL:
              return await reply
                .status(StatusCodes.INTERNAL_SERVER_ERROR)
                .send({ message: 'internal error occurred. please try again later.' });
            case Status.INVALID_ARGUMENT:
              return await reply
                .status(StatusCodes.BAD_REQUEST)
                .send(error.details);
            case Status.NOT_FOUND:
              return await reply
                .status(StatusCodes.NOT_FOUND)
                .send({ message: 'game with rank does not exist' });
            default:
              return await reply
                .status(StatusCodes.INTERNAL_SERVER_ERROR)
                .send({ message: 'internal error occurred. please try again later.' });
          }
        }

        const responseObject = response.toObject(false);
        return await reply
          .status(StatusCodes.OK)
          .send(responseObject.gameSale);
      });
  }

  return handle;
}
