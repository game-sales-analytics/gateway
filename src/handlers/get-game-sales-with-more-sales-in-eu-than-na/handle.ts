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
import type { GetGameSalesWithMoreSalesInEUThanNAReply } from '../../../proto-gen/coresrv_pb';
import { GetGameSalesWithMoreSalesInEUThanNARequest } from '../../../proto-gen/coresrv_pb';
import { extractAuthHeader } from '../../auth/authenticate';


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

    const grpcRequest = new GetGameSalesWithMoreSalesInEUThanNARequest();

    await new Promise<[
      ServiceError | null,
      GetGameSalesWithMoreSalesInEUThanNAReply,
    ]>(
      resolve => {
        const meta = new Metadata({ idempotentRequest: true });
        meta.set('auth', authToken);
        deps.coreService.getGameSalesWithMoreSalesInEUThanNA(
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
            default:
              return await reply
                .status(StatusCodes.INTERNAL_SERVER_ERROR)
                .send({ message: 'internal error occurred. please try again later.' });
          }
        }

        const responseObject = response.toObject(false);
        return await reply
          .status(StatusCodes.OK)
          .send({ games: responseObject.itemsList });
      });
  }

  return handle;
}
