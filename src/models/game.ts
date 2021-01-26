import { Entity, PrimaryGeneratedColumn, Column, DeepPartial } from 'typeorm';

export type GameRequired = Pick<Game, 'name' | 'path' | 'platform'> &
  DeepPartial<Game>;

@Entity()
export default class Game {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column('text')
  name!: string;

  @Column('text')
  path!: string;

  @Column('text')
  platform!: string;
}
