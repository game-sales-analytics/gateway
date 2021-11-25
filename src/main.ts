import { connect as connectCoreService } from './grpc/core';
import { connect as connectUsersService } from './grpc/users';
import { initialize } from './server';


const USERS_SERVICE_HOST = process.env['GATEWAY_USERSSRV_HOST'] ?? 'localhost';
const USERS_SERVICE_PORT = Number.parseInt(process.env['GATEWAY_USERSSRV_PORT'] ?? '50051', 10);
const CORE_SERVICE_HOST = process.env['GATEWAY_CORESRV_HOST'] ?? 'localhost';
const CORE_SERVICE_PORT = Number.parseInt(process.env['GATEWAY_CORESRV_PORT'] ?? '50050', 10);
const SERVER_HOST = process.env['GATEWAY_LISTEN_HOST'] ?? 'localhost';
const SERVER_PORT = Number.parseInt(process.env['GATEWAY_LISTEN_PORT'] ?? '6868', 10);


void Promise.all([
  connectUsersService({ host: USERS_SERVICE_HOST, port: USERS_SERVICE_PORT }),
  connectCoreService({ host: CORE_SERVICE_HOST, port: CORE_SERVICE_PORT }),
])
  .then(async services => await initialize(...services))
  .then(async server => await server.listen(SERVER_HOST, SERVER_PORT));
