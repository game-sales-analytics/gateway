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
import type { RegisterReply } from '../../../proto-gen/userssrv_pb';
import { RegisterRequest } from '../../../proto-gen/userssrv_pb';
import validate, { ValidationError } from '../../validator/validate';
import schema from './schema';


interface RequestBody {
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly password: string;
  readonly passwordConfirmation: string;
}

function parseRequestBody(requestBody: unknown): RequestBody {
  const m = new Map(Object.entries(requestBody as Record<string, unknown>));

  return {
    email: m.get('email') as string,
    firstName: m.get('firstName') as string,
    lastName: m.get('lastName') as string,
    password: m.get('password') as string,
    passwordConfirmation: m.get('passwordConfirmation') as string,
  };
}

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

      await validate(schema, request.body);
    } catch (error: unknown) {
      deps.logger.error(error, 'failed validating register form');
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
      return;
    }

    const requestBody = parseRequestBody(request.body);
    const registerRequest = new RegisterRequest()
      .setFirstName(requestBody.firstName)
      .setLastName(requestBody.lastName)
      .setEmail(requestBody.email)
      .setPassword(requestBody.password)
      .setPasswordConfirmation(requestBody.passwordConfirmation);

    await new Promise<[ServiceError | null, RegisterReply]>(resolve => {
      deps.usersService.register(
        registerRequest,
        (registerError, registerResponse) => {
          resolve([registerError, registerResponse]);
        },
      );
    })
      .then(async ([error, response]) => {
        if (!isNil(error)) {
          switch (error.code) {
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
        return await reply
          .status(StatusCodes.CREATED)
          .send(responseObject.registeredUser);
      });
  }

  return handle;
}
