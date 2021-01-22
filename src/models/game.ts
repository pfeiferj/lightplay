import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
