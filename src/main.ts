import fastify from 'fastify';
import { StatusCodes } from 'http-status-codes';
import { pino } from 'pino';


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
    level: 'debug',
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
  })
  .catch(error => {
    server.log.error('failed starting server', error);
  });
