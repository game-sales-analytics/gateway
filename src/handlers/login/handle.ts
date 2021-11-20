import type { ServiceError } from '@grpc/grpc-js';
import { Status } from '@grpc/grpc-js/build/src/constants';
import type {
  FastifyLoggerInstance,
  FastifyRequest,
  FastifyReply,
  RouteHandlerMethod,
} from 'fastify';
import { StatusCodes } from 'http-status-codes';
import isNil from 'lodash.isnil';
import type { UsersServiceClient } from '../../../proto-gen/userssrv_grpc_pb';
import type { LoginWithEmailReply } from '../../../proto-gen/userssrv_pb';
import { LoginWithEmailRequest } from '../../../proto-gen/userssrv_pb';
import validate, { ValidationError } from '../../validator/validate';
import schema from './schema';


export interface CreateHandlerDeps {
  readonly usersService: UsersServiceClient;
  readonly logger: FastifyLoggerInstance;
}

export function createHandler(
  deps: CreateHandlerDeps,
): RouteHandlerMethod {
  async function handle(
    request: FastifyRequest,
    reply: FastifyReply,
  ): Promise<void> {
    try {
      if (isNil(request.body)) {
        throw new ValidationError([{
          code: 'E_BODY_EMPTY',
          path: '.',
        }]);
      }

      await validate(schema, {
        ip: request.ip,
        deviceUserAgent: request.headers['user-agent'],
        email: (request.body as Readonly<Record<string, string>>)['email'],
        password: (request.body as Readonly<Record<string, string>>)['password'],
      });
    } catch (error: unknown) {
      if (error instanceof ValidationError) {
        await reply.status(StatusCodes.BAD_REQUEST).send({
          error: 'E_INVALID_FORM',
          details: error.items,
        });
        return;
      }

      await reply.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
        error: 'E_INTERNAL',
        details: 'internal error occurred. please try again later.',
      });
    }

    const loginWithEmailRequest = new LoginWithEmailRequest()
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      .setEmail((request.body as Readonly<Record<string, string>>)['email']!)
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      .setPassword((request.body as Readonly<Record<string, string>>)['password']!)
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      .setDeviceUserAgent(request.headers['user-agent']!)
      .setIp(request.ip);

    await new Promise<[ServiceError | null, LoginWithEmailReply]>(resolve => {
      deps.usersService.loginWithEmail(
        loginWithEmailRequest,
        (loginError, loginResponse) => {
          resolve([loginError, loginResponse]);
        },
      );
    })
      .then(async ([error, response]) => {
        if (!isNil(error)) {
          switch (error.code) {
            case Status.UNAUTHENTICATED:
              return await reply
                .status(StatusCodes.UNAUTHORIZED)
                .send({});
            case Status.INTERNAL:
              return await reply
                .status(StatusCodes.INTERNAL_SERVER_ERROR)
                .send({ message: 'internal error occurred. please try again later.' });
            case Status.INVALID_ARGUMENT:
              return await reply
                .status(StatusCodes.BAD_REQUEST)
                .send(JSON.parse(error.details));
            default:
              return await reply
                .status(StatusCodes.INTERNAL_SERVER_ERROR)
                .send({ message: 'internal error occurred. please try again later.' });
          }
        }

        const responseObject = response.toObject(false);
        return await reply.status(StatusCodes.CREATED).send(responseObject);
      });
  }

  return handle;
}
