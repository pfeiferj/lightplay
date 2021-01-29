import { Entity, PrimaryGeneratedColumn, Column, DeepPartial } from 'typeorm';

export type PlatformRequired = Pick<Platform, 'name'> & DeepPartial<Platform>;
// @TODO add join tables for: versions,websites

@Entity()
export default class Platform {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column('text')
  name!: string;

  @Column('int', { nullable: true })
  igdb_id!: number;

  @Column('text', { nullable: true })
  abbreviation!: string;

  @Column('text', { nullable: true })
  alternative_name!: string;

  @Column('int', { nullable: true }) // ID?
  category!: number;

  @Column('text', { nullable: true })
  checksum!: string;

  @Column('int', { nullable: true }) // ID?
  generation!: number;

  @Column('int', { nullable: true }) // ID?
  platform_family!: number;

  @Column('int', { nullable: true }) // ID?
  platform_logo!: number;

  @Column('text', { nullable: true })
  slug!: string;

  @Column('text', { nullable: true })
  summary!: string;

  @Column('text', { nullable: true })
  url!: string;
}
