import { createConnection } from 'typeorm';
import Game from './game';
import Platform from './platform';

export default createConnection({
  type: 'sqljs',
  location: 'lightplay.db',
  autoSave: true,
  entities: [Game, Platform],
  logging: false,
  synchronize: true,
});
