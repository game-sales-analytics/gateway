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
import type { GetGameSalesInIdsReply } from '../../../proto-gen/coresrv_pb';
import { GetGameSalesInIdsRequest } from '../../../proto-gen/coresrv_pb';
import { extractAuthHeader } from '../../auth/authenticate';
import validate, { ValidationError } from '../../validator/validate';
import { initialSchema, finalSchema } from './schema';


interface RequestQuery {
  readonly ids: string[];
}

function parseRequestQuery(query: unknown): RequestQuery {
  const m = new Map(Object.entries(query as Record<string, unknown>));

  return {
    ids: (m.get('ids') as string).split(','),
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

      await validate(initialSchema, request.query as Record<string, unknown>);
      await validate(finalSchema, (request.query as { ids: string }).ids.split(','));
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

    const body = parseRequestQuery(request.query);
    const grpcRequest = new GetGameSalesInIdsRequest()
      .setIdsList(body.ids);

    await new Promise<[
      ServiceError | null,
      GetGameSalesInIdsReply,
    ]>(
      resolve => {
        const meta = new Metadata({ idempotentRequest: true });
        meta.set('auth', authToken);
        deps.coreService.getGameSalesInIds(
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
                .send({
                  message: 'games with ids does not exist',
                  ids: error.details.slice('game sales not found: '.length).split(','),
                });
            default:
              return await reply
                .status(StatusCodes.INTERNAL_SERVER_ERROR)
                .send({ message: 'internal error occurred. please try again later.' });
          }
        }

        const responseObject = response.toObject(false);
        return await reply
          .status(StatusCodes.OK)
          .send(Object.fromEntries(responseObject.gameSalesMap));
      });
  }

  return handle;
}
