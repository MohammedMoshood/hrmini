import { Position } from './../../position/entities/postion.entity';
import {
  Entity,
  Column,
  OneToMany,
  BaseEntity,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Department extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Position, (position) => position.department, {
    eager: true,
  })
  positions: Position[];

  @CreateDateColumn({ default: null })
  createdAt: Date;

  @UpdateDateColumn({ default: null })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deletedAt', nullable: true })
  deletedAt: Date | null;
}
