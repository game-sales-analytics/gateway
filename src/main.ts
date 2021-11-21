import { connect as connectCoreService } from './grpc/core';
import { connect as connectUsersService } from './grpc/users';
import { initialize } from './server';


const USERS_SERVICE_PORT = 50_051;
const CORE_SERVICE_PORT = 50_050;
const SERVER_PORT = 8888;

void Promise.all([
  connectUsersService({ host: 'localhost', port: USERS_SERVICE_PORT }),
  connectCoreService({ host: 'localhost', port: CORE_SERVICE_PORT }),
])
  .then(async services => await initialize(...services))
  .then(async server => await server.listen('localhost', SERVER_PORT));
