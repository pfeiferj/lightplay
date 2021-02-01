import { exec } from 'child_process';
import PlatformModel, { PlatformRequired } from '../models/platform';
import type GameWrapper from './Game';
import Connection from '../models/index';

class Platform implements PlatformModel {
  model: PlatformModel;

  constructor(platform: PlatformModel) {
    this.model = platform;
  }

  async update(platformDetails: Partial<PlatformModel>): Promise<Platform> {
    const connection = await Connection;
    const updateEntity = connection.manager.create(PlatformModel, {
      id: this.model.id,
      ...platformDetails,
    });
    const platform = await connection.manager.save(PlatformModel, updateEntity);
    this.model = platform;
    return this;
  }

  launchGame(game: GameWrapper) {
    if (this.path && game.path) {
      let execString = `"${this.path}"`;
      if (this.arguments) {
        execString += ` ${this.arguments}`;
      }
      execString += ` "${game.path}"`;
      exec(execString, (error, stdout, stderr) => {
        console.error(error);
        console.log(stdout);
        console.error(stderr);
      });
    } else {
      let errorMessage = 'Missing a path for the following:';
      if (!this.path) {
        errorMessage += '\nPlatform';
      }
      if (!game.path) {
        errorMessage += '\nGame';
      }
      throw new Error(errorMessage);
    }
  }

  static async get(id: number): Promise<Platform | null> {
    const connection = await Connection;
    const platform = await connection.manager.findOne(PlatformModel, id);
    return platform ? new Platform(platform) : null;
  }

  static async getAll(): Promise<Platform[]> {
    const connection = await Connection;
    const platforms = await connection.manager.find(PlatformModel);
    return platforms.map((platform) => new Platform(platform));
  }

  static async create(platformDetails: PlatformRequired): Promise<Platform> {
    const connection = await Connection;
    const platform = connection.manager.create(PlatformModel, platformDetails);
    await connection.manager.save(platform);
    return new Platform(platform);
  }

  get id() {
    return this.model.id;
  }

  get abbreviation() {
    return this.model.abbreviation;
  }

  get alternative_name() {
    return this.model.alternative_name;
  }

  get generation() {
    return this.model.generation;
  }

  get platform_family() {
    return this.model.platform_family;
  }

  get platform_logo() {
    return this.model.platform_logo;
  }

  get name() {
    return this.model.name;
  }

  get installed() {
    return this.model.installed;
  }

  get path() {
    return this.model.path;
  }

  get arguments() {
    return this.model.arguments;
  }

  get igdb_id() {
    return this.model.igdb_id;
  }

  get category() {
    return this.model.category;
  }

  get checksum() {
    return this.model.checksum;
  }

  get slug() {
    return this.model.slug;
  }

  get summary() {
    return this.model.summary;
  }

  get url() {
    return this.model.url;
  }
}

export default Platform;
