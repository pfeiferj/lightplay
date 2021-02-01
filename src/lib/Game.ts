import GameModel, { GameRequired } from '../models/game';
import Connection from '../models/index';
import Platform from './Platform';

class Game implements GameModel {
  model: GameModel;

  platformWrapper?: Promise<Platform | null>;

  constructor(game: GameModel) {
    this.model = game;
    if (this.platform) {
      this.platformWrapper = Platform.get(this.platform);
    }
  }

  async update(gameDetails: Partial<GameModel>): Promise<Game> {
    const connection = await Connection;
    const updateEntity = connection.manager.create(GameModel, {
      id: this.model.id,
      ...gameDetails,
    });
    const game = await connection.manager.save(GameModel, updateEntity);
    this.model = game;
    return this;
  }

  async launch(): Promise<void> {
    if (this.platformWrapper) {
      const platform = await this.platformWrapper;
      if (platform) {
        platform.launchGame(this);
      }
    }
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

  get platform() {
    return this.model.platform;
  }

  get igdb_id() {
    return this.model.igdb_id;
  }

  get path() {
    return this.model.path;
  }

  get aggregated_rating() {
    return this.model.aggregated_rating;
  }

  get aggregated_rating_count() {
    return this.model.aggregated_rating_count;
  }

  get category() {
    return this.model.category;
  }

  get checksum() {
    return this.model.checksum;
  }

  get collection() {
    return this.model.collection;
  }

  get cover() {
    return this.model.cover;
  }

  get first_release_date() {
    return this.model.first_release_date;
  }

  get follows() {
    return this.model.follows;
  }

  get franchise() {
    return this.model.franchise;
  }

  get hypes() {
    return this.model.hypes;
  }

  get parent_game() {
    return this.model.parent_game;
  }

  get rating() {
    return this.model.rating;
  }

  get rating_count() {
    return this.model.rating_count;
  }

  get slug() {
    return this.model.slug;
  }

  get status() {
    return this.model.status;
  }

  get storyline() {
    return this.model.storyline;
  }

  get summary() {
    return this.model.summary;
  }

  get total_rating() {
    return this.model.total_rating;
  }

  get total_rating_count() {
    return this.model.total_rating_count;
  }

  get url() {
    return this.model.url;
  }

  get version_parent() {
    return this.model.version_parent;
  }

  get version_title() {
    return this.model.version_title;
  }
}

export default Game;
