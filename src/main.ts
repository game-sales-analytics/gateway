import { connect as connectCoreService } from './grpc/core';
import { connect as connectUsersService } from './grpc/users';
import { initialize } from './server';


void Promise.all([
  connectUsersService({ host: 'localhost', port: 50_051 }),
  connectCoreService({ host: 'localhost', port: 50_050 }),
])
  .then(async services => await initialize(...services))
  .then(async server => await server.listen('localhost', 8888));
