import { connect } from './grpc/users';
import { initialize } from './server';


void connect({ host: 'localhost', port: 50_050 })
  .then(async usersService => await initialize(usersService))
  .then(async server => await server.listen('localhost', 8585));
