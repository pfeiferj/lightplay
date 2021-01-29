import { Entity, PrimaryGeneratedColumn, Column, DeepPartial } from 'typeorm';

export type GameRequired = Pick<Game, 'name' | 'installed'> & DeepPartial<Game>;
// @TODO add join tables for: age_ratings,alternative_names,artworks,bundles,dlcs,expansions,external_games,franchises,game_engines,game_modes,genres,involved_companies,keywords,multiplayer_modes,platforms,player_perspectives,release_dates,screenshots,similar_games,standalone_expansions,tags,themes,videos,websites' \

@Entity()
export default class Game {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column('text')
  name!: string;

  @Column('boolean', { default: false })
  installed!: boolean;

  @Column('int', { nullable: true })
  igdb_id!: number;

  @Column('text', { nullable: true })
  path!: string;

  @Column('float', { nullable: true })
  aggregated_rating!: number;

  @Column('int', { nullable: true })
  aggregated_rating_count!: number;

  @Column('int', { nullable: true }) // ID?
  category!: number;

  @Column('text', { nullable: true })
  checksum!: string;

  @Column('int', { nullable: true }) // ID?
  collection!: number;

  @Column('int', { nullable: true }) // ID?
  cover!: number;

  @Column('int', { nullable: true })
  first_release_date!: number;

  @Column('int', { nullable: true })
  follows!: number;

  @Column('int', { nullable: true }) // ID?
  franchise!: number;

  @Column('int', { nullable: true })
  hypes!: number;

  @Column('int', { nullable: true }) // ID?
  parent_game!: number;

  @Column('float', { nullable: true })
  rating!: number;

  @Column('int', { nullable: true })
  rating_count!: number;

  @Column('text', { nullable: true })
  slug!: string;

  @Column('text', { nullable: true }) // ID?
  status!: number;

  @Column('text', { nullable: true })
  storyline!: string;

  @Column('text', { nullable: true })
  summary!: string;

  @Column('float', { nullable: true })
  total_rating!: number;

  @Column('int', { nullable: true })
  total_rating_count!: number;

  @Column('text', { nullable: true })
  url!: string;

  @Column('int', { nullable: true }) // ID?
  version_parent!: number;

  @Column('text', { nullable: true })
  version_title!: string;
}
