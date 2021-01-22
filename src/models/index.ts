import { createConnection } from 'typeorm';
import Game from './game';

export default createConnection({
  type: 'sqljs',
  location: 'lightplay.db',
  autoSave: true,
  entities: [Game],
  logging: false,
  synchronize: true,
});
