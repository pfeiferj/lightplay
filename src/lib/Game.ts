import GameModel, { GameRequired } from '../models/game';
import Connection from '../models/index';

class Game implements GameModel {
  model: GameModel;

  constructor(game: GameModel) {
    this.model = game;
  }

  static async getAll(): Promise<Game[]> {
    const connection = await Connection;
    const games = await connection.manager.find(GameModel);
    return games.map((game) => new Game(game));
  }

  static async create(gameDetails: GameRequired): Promise<Game> {
    const connection = await Connection;
    const game = connection.manager.create(GameModel, gameDetails);
    await connection.manager.save(game);
    return new Game(game);
  }

  get id() {
    return this.model.id;
  }

  get name() {
    return this.model.name;
  }

  get path() {
    return this.model.path;
  }

  get platform() {
    return this.model.platform;
  }
}

export default Game;
