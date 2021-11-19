import fastify from 'fastify';
import { StatusCodes } from 'http-status-codes';
import { pino } from 'pino';
import { credentials } from '@grpc/grpc-js';
import { PingRequest } from '../proto-gen/userssrv_pb';
import { UsersServiceClient } from '../proto-gen/userssrv_grpc_pb';


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
  method: 'GET',
  url: '/',
  async handler(_request, reply) {
    await reply.status(StatusCodes.CREATED).send({ message: 'Holla!' });
  },
});

server.listen('3000', 'localhost')
  .then(address => {
    server.log.info('server is listening on', address);

    server.log.trace("connection to users service grpc server at", "localhost:50050");

    const client = new UsersServiceClient('localhost:50050', credentials.createInsecure());
    client.ping(new PingRequest(), (error, response) => {
      if (null !== error) {
        server.log.error(error, "failed calling server");
        throw error;
      }

      server.log.info({ pong: response.getPong() }, "received response");
    })
  })
  .catch(error => {
    server.log.error('failed starting server', error);
  });
