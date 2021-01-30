import { Connection as ConnectionType } from 'typeorm';
import GameModel from '../../models/game';
import Game from '../../lib/Game';
import Connection from '../../models/index';

describe('#Game', () => {
  let connection: ConnectionType;

  beforeAll(async () => {
    connection = await Connection;
  });

  beforeEach(async () => {
    await connection.dropDatabase();
    await connection.synchronize();
  });

  it('Wraps a game model', async () => {
    const model = connection.manager.create(GameModel, { name: 'test' });
    const game = new Game(model);
    expect(game.model).toEqual(model);
  });

  it('reflects all of the models properties', async () => {
    const gameProperties: GameModel = {
      id: 1,
      name: 'aoeu',
      installed: true,
      igdb_id: 123,
      path: 'aoeu',
      aggregated_rating: 1.23,
      aggregated_rating_count: 24,
      category: 1,
      checksum: 'aoeu',
      collection: 2,
      cover: 'aoeu',
      first_release_date: 1,
      follows: 1,
      franchise: 2,
      hypes: 1,
      parent_game: 3,
      rating: 23,
      rating_count: 123,
      slug: 'aoeu',
      status: 1,
      storyline: 'aoeu',
      summary: 'aoeu',
      total_rating: 234,
      total_rating_count: 3,
      url: 'aaoeu',
      version_parent: 2,
      version_title: 'aoeu',
    };
    const model = connection.manager.create(GameModel, gameProperties);
    const game = new Game(model);
    for (const key of Object.keys(gameProperties)) {
      // @ts-ignore
      expect(game[key]).toEqual(gameProperties[key]);
    }
  });

  describe('.create', () => {
    it('creates a game in the database', async () => {
      expect.assertions(3);
      const startGameCount = (await connection.manager.find(GameModel)).length;
      expect(startGameCount).toEqual(0); // database should be clean

      await Game.create({ name: 'aoeu' });
      const games = await connection.manager.find(GameModel);

      expect(games.length).toEqual(1);
      expect(games[0].name).toEqual('aoeu');
    });
  });
});
