import type { FastifyRequest, FastifyReply, RouteHandlerMethod } from 'fastify';
import { StatusCodes } from 'http-status-codes';
import type { UsersServiceClient } from '../../../proto-gen/userssrv_grpc_pb';
import { LoginWithEmailRequest } from '../../../proto-gen/userssrv_pb';
import validate, { ValidationError } from '../../validator/validate';
import schema from './schema';


export interface CreateHandlerOptions {
  readonly usersService: UsersServiceClient;
}

export function createHandler(
  options: CreateHandlerOptions,
): RouteHandlerMethod {
  async function handle(
    request: FastifyRequest,
    reply: FastifyReply,
  ): Promise<void> {
    try {
      validate(schema, {
        ip: request.ip,
        deviceUserAgent: request.headers,
        email: request.body.email,
        password: request.body.password,
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

      const loginWithEmailRequest = new LoginWithEmailRequest()
        .setEmail(requestBody.email)
        .setPassword(requestBody.password)
        .setContextualInfo(
          new LoginWithEmailRequest.ContextualInfo()
            .setDeviceUserAgent(requestBody.deviceAgent)
            .setIp(request.ip),
        );
      options.usersService.loginWithEmail(
        loginWithEmailRequest,
        (error, response) => {},
      );
    }
  }

  return handle;
}
