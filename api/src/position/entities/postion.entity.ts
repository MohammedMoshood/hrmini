import { Department } from './../../department/entities/department.entity';
import {
  Entity,
  Column,
  ManyToOne,
  BaseEntity,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Position extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Department, (department) => department.positions, {
    eager: false,
  })
  department: string;

  // @Column()
  // departmentId: number;

  @CreateDateColumn({ default: null })
  createdAt: Date;

  @UpdateDateColumn({ default: null })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deletedAt', nullable: true })
  deletedAt: Date | null;
}
