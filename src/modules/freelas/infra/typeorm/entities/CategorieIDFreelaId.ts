import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import Categories from './Categories';
import Freelas from './Freelas';

@Entity('categorieIdFreelaId')
export default class CategorieIdFreelaId {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  categorie_id: string;

  @Column()
  freela_id: string;

  @ManyToOne(() => Categories, categories => categories, { eager: true })
  @JoinColumn({ name: 'categorie_id' })
  categorie: Categories;

  @ManyToOne(() => Freelas)
  @JoinColumn({ name: 'freela_id' })
  freela: Freelas;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
