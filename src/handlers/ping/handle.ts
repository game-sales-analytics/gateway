import type {
  FastifyLoggerInstance,
  FastifyRequest,
  FastifyReply,
  RouteHandlerMethod,
} from 'fastify';
import { StatusCodes } from 'http-status-codes';


export interface CreateHandlerDeps {
  readonly logger: FastifyLoggerInstance;
}

export function createHandler(
  deps: CreateHandlerDeps,
): RouteHandlerMethod {
  async function handle(
    _request: FastifyRequest,
    reply: FastifyReply,
  ): Promise<void> {
    deps.logger.debug('handling ping request');
    return await reply
      .status(StatusCodes.OK)
      .send({ pong: true });
  }

  return handle;
}
