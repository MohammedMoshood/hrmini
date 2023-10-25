import { Position } from './../../position/entities/postion.entity';
import { Status } from '../enum/status.enum';
import { Gender } from '../enum/gender.enum';
import { User } from './../../auth/entities/user.entity';
import {
  Column,
  Entity,
  Unique,
  ManyToOne,
  DeleteDateColumn,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@Unique(['email'])
export class Staff {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.id, { eager: false })
  user: User;

  @Column()
  userId: number;

  @Column()
  departmentId: number;

  @Column()
  positionId: number;

  @ManyToOne(() => Position, (position) => position.staff)
  position: Position;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  address: string;

  @Column()
  age: string;

  @Column()
  gender: Gender;

  @Column()
  status: Status;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn({ default: null })
  createdAt: Date;

  @UpdateDateColumn({ default: null })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deletedAt', nullable: true })
  deletedAt: Date | null;
}
