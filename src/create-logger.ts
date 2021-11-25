import type { FastifyLoggerInstance } from 'fastify';
import pino from 'pino';


function readLoggerLevel(): string {
  return process.env['GATEWAY_LOG_LEVEL'] ?? 'info';
}

export default function createLogger(): boolean | FastifyLoggerInstance {
  if ('production' === process.env['GATEWAY_ENV']) {
    return pino(
      {
        level: readLoggerLevel(),
        timestamp: pino.stdTimeFunctions.isoTime,
      },
      pino.destination(1),
    );
  }

  return pino({
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
    level: readLoggerLevel(),
  });
}
