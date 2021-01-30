import { createConnection, ConnectionOptions } from 'typeorm';
import Game from './game';
import Platform from './platform';

const isJest = !!process.env.JEST_WORKER_ID;

const connectionOptions: ConnectionOptions = {
  type: 'sqljs',
  autoSave: !isJest,
  location: isJest ? 'fake.db' : 'lightplay.db',
  entities: [Game, Platform],
  logging: false,
  synchronize: true,
};

export default createConnection(connectionOptions);
